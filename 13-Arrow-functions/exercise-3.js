const sum = (a, b) => a + b;

const subtract =  (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = value => console.log(value);
/* come per l'esercizio 11 non so se la consegna chiedesse di fare che la funzione log esegua il 
console.log(value) ma senza fare il return quindi nel dubbio scrivo qua sotto la versione che non fa il return 
const log = value => {console.log(value); }; */

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5))
/* al primo tentativo ma quanto sono forte XD */