var createCalendar = require('../src/calendar');
var renderCalendarToString = require('../src/ui');

function displayCalendar() {
  let data = createCalendar(new Date());
  let div = document.getElementById('data');

  div.innerHTML = renderCalendarToString(data);
}



var getAllCallback = function(list) {
  displayCalendar();
};

document.addEventListener("DOMContentLoaded", function() {
  chrome.management.getAll(getAllCallback);
});

