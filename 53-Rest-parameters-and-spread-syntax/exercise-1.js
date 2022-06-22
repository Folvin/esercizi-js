function sum(...rest) {
    return rest.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}

console.log(sum(1, 2, 3, 4, 5));