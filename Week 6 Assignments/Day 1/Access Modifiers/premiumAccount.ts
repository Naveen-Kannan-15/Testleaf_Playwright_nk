import { BankAccount } from "../../Assignments/Access Modifiers/bankAccount.js";

class PremiumAccount extends BankAccount{
    
    constructor(){
        super()
        this.accountHolder = "Kavitha Kannan"
        // this.accountNumber = 770099211 // cannot be modified since it is a readonly property
        console.log(`The updated account holder name is ${this.accountHolder}`)
    }
    displayAccount(){
        console.log(`The available balance is ${super.checkBalance}`)
    }
}
const paobj = new PremiumAccount
paobj.displayAccount()
paobj.writeBalance = 700
console.log(`The updated balance is ${paobj.checkBalance}`)