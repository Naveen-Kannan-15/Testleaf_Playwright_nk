class ManisDumBriyani {
    menu() {
        console.log("Meals");
    }
    acceptOrder() {
        console.log("Order Accepted");
    }
    prepareFood() {
        console.log("Food being prepared");
    }
    trackOrder() {
        console.log("Delivery On Time");
    }
    cancelOrder() {
        console.log("Cancelled Order");
    }
}
const Obj = new ManisDumBriyani;
Obj.menu();
Obj.acceptOrder();
Obj.prepareFood();
Obj.trackOrder();
Obj.cancelOrder();
export {};
