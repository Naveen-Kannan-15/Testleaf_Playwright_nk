"use strict";
// Class, Properties, Methods & Constructors
class Order {
    // Properties
    productName;
    orderID;
    price;
    placeOrder() {
        console.log(`Order placed for Iphone 16 with Order ID ${this.orderID}`);
    }
    cancelOrder() {
        console.log("Order cancelled for Iphone 16");
    }
    constructor() {
        this.productName = "Iphone 16";
        this.orderID = "AMZ123456";
        this.price = "$ 380.57";
        console.log("Order created successfully for Iphone 16");
    }
}
const order1 = new Order;
order1.placeOrder();
order1.cancelOrder();
