function calculate() {
  return {
    risultato: 0,
    add(n) {
      this.risultato += n;
      return this
    },
    sub(n) {
      this.risultato -= n
      return this
    },
    multiply(n) {
      this.risultato *= n
      return this
    },
    divide(n) {
      this.risultato /= n
      return this
    },
    printResult () {
      console.log(this.risultato)
    }

  }
}
const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7