import { Restaurant } from "./abstraction.js";
class Geetham extends Restaurant {
    prepareFood() {
        console.log("Preparing Meals");
    }
}
class KFC extends Restaurant {
    prepareFood() {
        console.log("Preparing Fried Chicken");
    }
}
const Gobj = new Geetham;
const Kobj = new KFC;
Gobj.acceptOrder();
Gobj.paymentCheck();
Gobj.prepareFood();
Kobj.acceptOrder();
Kobj.paymentCheck();
Kobj.prepareFood();
