export class BankAccount {
    accountHolder;
    static bankName;
    accountNumber;
    balance;
    constructor() {
        this.accountHolder = "Naveen Kannan";
        BankAccount.bankName = "Swiss Bank";
        this.accountNumber = 617707609;
        this.balance = 600;
    }
    displayAccount() {
        console.log(`The name of the Account Holder of ${BankAccount.bankName} is ${this.accountHolder} with a reference account number of ${this.accountNumber} has an available balance of ${this.balance} only.`);
    }
    get checkBalance() {
        return this.balance;
    }
    set writeBalance(newBalance) {
        this.balance = newBalance;
    }
}
const bankObj = new BankAccount;
// bankObj.accountNumber // will not be accessible outside the class since it is a protected property
bankObj.displayAccount();
// console.log(`The available balance is ${bankObj.checkBalance}`)
// bankObj.writeBalance = 700
// console.log(`The updated balance is ${bankObj.checkBalance}`)
