function memoize(fn) {
  let cache = {};

  return function (x) {
    if (x in cache) {
      console.log(`fetching from cache ${x}! that is equal to ${cache[x]}
the result of the function is`)
      return cache[x]
    }

    return cache[x] = fn(x)
  }
}
function factorial(x) {
  if (x === 0) {
    console.log(`calculating 0! = 1
the result of the function is`)
    return 1;
  }
  console.log(`calculating ${x}! that is ${x} * ${x - 1}!`)
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(2));
console.log(factorial(14));
console.log(factorial(16));
console.log(factorial(0));
console.log(factorial(20));