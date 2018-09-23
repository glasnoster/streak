var createCalendar = require('../src/calendar');
var {renderCalendarToString, renderControlsToString} = require('../src/ui');

function displayCalendar() {
  let data = createCalendar(new Date());
  let div = document.getElementById('data');
  div.innerHTML = renderCalendarToString(data);
}


function displayControls() {
  let div = document.getElementById('controls');
  div.innerHTML = renderControlsToString();
}


var getAllCallback = function(list) {
  displayCalendar();
  displayControls();
};

document.addEventListener("DOMContentLoaded", function() {
  chrome.management.getAll(getAllCallback);
});

