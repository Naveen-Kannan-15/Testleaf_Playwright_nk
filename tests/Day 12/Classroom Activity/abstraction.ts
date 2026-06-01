export abstract class Restaurant{
    acceptOrder(){
        console.log("Order Accepted")
    }
    paymentCheck(){
        console.log("Payment successful")
    }
    abstract prepareFood(): void
}