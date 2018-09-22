const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_abbreviations = [
"JAN", "FEB", "MAR", "APR", "MAY", "JUN",
"JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


function renderCalendarToString(calendar_data, week_starts_on=1) {
  return [
    "<div class='calendar'>",
    headerDiv(week_starts_on),
    monthDiv(calendar_data),
    "</div>"
  ].join('')
}


function headerDiv(week_starts_on) {
  let cells = [
    ...weekdays.slice(week_starts_on - 7),
    ...weekdays.slice(0, week_starts_on)
  ].map((day) => `<div class='header-cell'>${day}</div>`);

  return `<div class='header'>${cells.join('')}</div>`
}


function weekDiv(week_data) {
  let dayDivs = week_data.map((day) => dayDiv(day))
  return `<div class='week'>${dayDivs.join('')}</div>`
}


function monthDiv(month_data) {
  let week_divs = month_data.map((week) => weekDiv(week))
  return `<div class='month'>${week_divs.join('')}</div>`
  // return week_divs.join('');
}


function isToday(date) {
  let today = new Date();
  return today.toDateString() === date.toDateString();
}


function dayDiv(data) {
  let date = data.date.getDate();
  var date_string = date < 10 ? `0${date}` : `${date}`;

  if (date == 1) {
    let month = month_abbreviations[data.date.getMonth()]
    date_string = `${month} ${date_string}`
  }



  return `<div class='day ${isToday(data.date) ? "diag" : ""}' >${date_string}</div>`
}

module.exports = renderCalendarToString;
