const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function renderCalendarToString(calendar_data, week_starts_on=1) {
  let today = new Date();
  return [
    "<div class='calendar'>",
    titleDiv(today),
    headerDiv(week_starts_on, today),
    monthDiv(calendar_data, today),
    "</div>"
  ].join('')
}


function titleDiv(today) {
  let month = today.toLocaleString("en-us", {month: "long"});
  return `<div class='title'>${month}</div>`
}


function headerDiv(week_starts_on, today) {
  let cells = [
    ...weekdays.slice(week_starts_on - 7),
    ...weekdays.slice(0, week_starts_on)
  ].map((day) => `<div class='header-cell'>${day.substring(0, 3)}</div>`);

  return `<div class='header'>${cells.join('')}</div>`
}


function weekDiv(week_data, today) {
  let dayDivs = week_data.map((day) => dayDiv(day, today))
  return `<div class='week'>${dayDivs.join('')}</div>`
}


function monthDiv(month_data, today) {
  let week_divs = month_data.map((week) => weekDiv(week, today))
  return `<div class='month'>${week_divs.join('')}</div>`
}


function isToday(date) {
  let today = new Date();
  return today.toDateString() === date.toDateString();
}


function isInCurrentMonth(date, current_date) {
  return date.getMonth() == current_date.getMonth()
}


function dayDiv(data, today) {
  let date = data.date.getDate();
  var date_string = date < 10 ? `0${date}` : `${date}`;

  if (date == 1) {
    let month = data.date.toLocaleString("en-us", {month: "short"});
    date_string = `${date_string} ${month}`
  }

  let is_today_class = isToday(data.date) ? "today" : "";
  let current_month_class = isInCurrentMonth(data.date, today) ? "in_month" : "";
  let classes = [is_today_class, current_month_class].join(" ");

  return `<div class='day ${classes}' >${date_string}</div>`
}

module.exports = renderCalendarToString;
