// @ts-check

/**
 * @class
 */
class BankAccount {
    /**
     * @param {string} owner - The owner of the account
     * @param {number} initialBalance - The initial balance
     */
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    /**
     * @param {number} amount - The amount to deposit
     */
    deposit(amount) {
        if (amount <= 0) throw new Error("Deposit amount must be positive");
        this.balance += amount;
    }

    /**
     * @param {number} amount - The amount to withdraw
     */
    withdraw(amount) {
        if (amount > this.balance) throw new Error("Insufficient funds");
        this.balance -= amount;
    }

    /**
     * @return {number} - The current balance
     */
    getBalance() {
        return this.balance;
    }
}

const myAccount = new BankAccount("Alice", 1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Outputs: 1500

myAccount.withdraw(200);
console.log(myAccount.getBalance()); // Outputs: 1300
