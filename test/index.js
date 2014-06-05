var assert = require('assert');
var unary = require('../');
describe('fn-nullary', function () {
  it('fn.length should be 0', function () {
    var fn = function (a, b) {};
    assert(unary(fn).length == 0);
  });
  it('should be called with exactly no argument', function () {
    var fn = function (a, b) {
      return arguments.length;
    }
    assert(unary(fn)(1,2,3) == 0);
  });
  it('first argument should be undefined', function () {
    var fn = function (a) {
      return typeof a;
    }
    assert(unary(fn)(1,2,3,4) === 'undefined');
  });
});
