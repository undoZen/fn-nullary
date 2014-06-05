module.exports = function (fn) {
  return function () {
    return fn.call(this);
  }
};
