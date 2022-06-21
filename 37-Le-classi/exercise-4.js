class BankAccount {
    bankAccount;
    constructor(importoIniziale) {
        this.bankAccount = importoIniziale;
    }
    deposit = deposited => this.bankAccount += deposited;
    withdraw = withdrawal => this.bankAccount -= withdrawal;
    view = () => console.log(this.bankAccount)
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();