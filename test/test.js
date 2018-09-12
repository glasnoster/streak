var expect = require('chai').expect;
var buildCalendar = require('../src/calendar');

describe('buildCalendar()', function () {
  it('returns "foo"', function () {
    expect(buildCalendar(new Date(), 1)).to.be.equal("foo");

  });
});