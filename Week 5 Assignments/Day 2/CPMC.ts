// Class, Properties, Methods & Constructors

class Order {
    // Properties
    productName : string
    orderID : string
    price : string

    placeOrder(){
        console.log(`Order placed for Iphone 16 with Order ID ${this.orderID}`)
    }

    cancelOrder(){
        console.log("Order cancelled for Iphone 16")
    }

    constructor(){
        this.productName = "Iphone 16"
        this.orderID = "AMZ123456"
        this.price = "$ 380.57"
        console.log("Order created successfully for Iphone 16")
    }
}

const order1 = new Order

order1.placeOrder()
order1.cancelOrder()

/* OUTPUT:
Order created successfully for Iphone 16
Order placed for Iphone 16 with Order ID AMZ123456
Order cancelled for Iphone 16 */