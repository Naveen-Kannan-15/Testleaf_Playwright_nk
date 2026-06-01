import { SwiggyRules, ZomatoRules } from "./interface";

class ManisDumBriyani implements SwiggyRules, ZomatoRules{
    menu(): void {
        console.log("Meals")
    }
    acceptOrder(): void {
        console.log("Order Accepted")
    }
    prepareFood(): void {
        console.log("Food being prepared")
    }
    trackOrder(): void {
        console.log("Delivery On Time")
    }
    cancelOrder(): void {
        console.log("Cancelled Order")
    }
}

const Obj = new ManisDumBriyani
Obj.menu()
Obj.acceptOrder()
Obj.prepareFood()
Obj.trackOrder()
Obj.cancelOrder()

/* Output:
Meals
Order Accepted
Food being prepared
Delivery On Time
Cancelled Order */