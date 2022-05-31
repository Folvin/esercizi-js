function sumUntil(maxValue) {
  let listOfValue = []
  for (let i = 0; i <= maxValue; i++) {
    listOfValue.push(i);
  };
  return listOfValue.reduce((previous, current) => previous + current)
}

console.log(sumUntil(5));

