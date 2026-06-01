import { CanaraBank } from "./canaraAbstraction.js";
class Amazon extends CanaraBank {
    cashOnDelivery() {
        console.log("Cash on Delivery option selected in Amazon");
    }
    upiPayments() {
        console.log("UPI Payment option selected in Amazon");
    }
    cardPayments() {
        console.log("Card Payment option selected in Amazon");
    }
    internetBanking() {
        console.log("Internet Banking option selected in Amazon");
    }
}
const Aobj = new Amazon();
Aobj.cashOnDelivery();
Aobj.upiPayments();
Aobj.cardPayments();
Aobj.internetBanking();
Aobj.recordPaymentDetails();
