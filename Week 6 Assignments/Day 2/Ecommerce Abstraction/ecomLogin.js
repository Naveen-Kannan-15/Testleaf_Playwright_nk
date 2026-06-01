import { BasePage } from "./ecomInterface.js";
class LoginPage extends BasePage {
    verifyPage() {
        console.log("Login Page verified");
    }
    enterUsername() {
        console.log('Username entered');
    }
    enterPassword() {
        console.log('Pasword entered');
    }
    clickLogin() {
        console.log("Login Successful");
    }
}
class ProductPage extends BasePage {
    verifyPage() {
        console.log("Product Page verified");
    }
    searchProduct() {
        console.log("Products lists");
    }
    addToCart() {
        console.log("Product added to the cart");
    }
}
const Lobj = new LoginPage();
Lobj.waitForPageLoad();
Lobj.verifyPage();
Lobj.enterUsername();
Lobj.enterPassword();
Lobj.clickLogin();
Lobj.getPageTitle();
