function memoize(fn) {
  let cache = {};

  return function (x) {
    if (x in cache) {
      return `fetching result from cache ${cache[x]}`
    }
    cache[x] = fn(x)

    return `calculating result from function ${fn(x)}`
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}


factorization = memoize(factorial);
console.log(factorization(10));
console.log(factorization(4));
console.log(factorization(10));
console.log(factorization(13));
console.log(factorization(7));
console.log(factorization(4));
console.log(factorization(0));
console.log(factorization(10));



