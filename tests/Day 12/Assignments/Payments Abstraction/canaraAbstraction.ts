import { Payment } from "./paymentsInterface.js";

export abstract class CanaraBank implements Payment{
    abstract cashOnDelivery(): void
    abstract upiPayments(): void
    abstract cardPayments(): void
    abstract internetBanking(): void
    recordPaymentDetails(){
        console.log("Payment details recorded in Canara Bank")
    }
}