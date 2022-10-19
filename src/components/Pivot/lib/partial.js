export function partial(fn) {
  var slice = Array.prototype.slice;
  var partialArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    return fn.apply(this, partialArgs.concat(slice.call(arguments)));
  };
}
