var expect = require('chai').expect;
var createCalendar = require('../src/calendar');

describe('createCalendar()', function() {
  var date = new Date(2018, 9, 12);
  var data_getter = (date) => {
    return {test: 'TEST'}
  }

  it('should start the calendar at the specified day of the week', function(){
    let specified_day = 1;
    let first_day = createCalendar(date, specified_day)[0][0].date;

    expect(first_day.getDay()).to.be.equal(specified_day);
  });

  it('should use the data_getter function if supplied to set data for the date', function(){
    let calendar = createCalendar(date, 1, data_getter);

    expect(calendar[0][0].data.test).to.be.equal('TEST')
  });

});
