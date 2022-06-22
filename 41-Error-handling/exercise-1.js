class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      // throw an exception if amount is negative
      if (amount < 0){
        throw new Error(`depositing negative value (${amount}) not valid`)
      }
      this.#amount += amount;
    }
    catch (err) {
      console.log(err.name, err.message)
    }
  }

  withdraw(amount) {
    try  {
      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      if (amount < 0) {
        throw new Error(`withdrawing negative value (${amount}) not valid`)
      }
      else if (amount > this.#amount) {
        throw new Error(`withdrawing (${amount}) more than stored (${this.#amount})`)
      }
      this.#amount -= amount;
    }
    catch(err) {
      console.log(err.name, err.message)
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();