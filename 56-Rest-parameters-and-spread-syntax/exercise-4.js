function sum(...numbers) {
  return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));