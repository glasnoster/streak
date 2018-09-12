function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}


function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}


function dateWithOffset(date, offset) {
  let new_date = new Date(date);
  new_date.setDate(new_date.getDate() + offset);

  return new_date;
}


function buildWeek(start_date) {
  return [...Array(7).keys()].map(offset => {
    let date = dateWithOffset(start_date, offset);

    return { date }
  });
}


function buildCalendar(date, week_starts_on=1, calendar=[]) {
  let [last_week] = calendar.slice(-1);
  let [last_day] = (last_week || []).slice(-1);
  let last_day_of_month = lastDayOfMonth(date);

  if (last_day && last_day.date >= last_day_of_month) {
    console.log({calendar})
    return calendar;
  }

  var new_week_start_date;
  if (last_day === undefined) {
    let first_day_of_month = firstDayOfMonth(date);
    let days_offset = week_starts_on - first_day_of_month.getDay();

    new_week_start_date = dateWithOffset(first_day_of_month, days_offset)
  } else {
    new_week_start_date = dateWithOffset(last_day.date, 1)
  }

  return buildCalendar(date, week_starts_on, [...calendar, buildWeek(new_week_start_date)]);
}


module.exports = buildCalendar;
