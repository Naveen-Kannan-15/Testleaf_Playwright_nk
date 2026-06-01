import { BasePage, PageRules } from "./ecomInterface.js";

class LoginPage extends BasePage implements PageRules{
    verifyPage(): void {
        console.log("Login Page verified")
    }
    enterUsername(){
        console.log('Username entered')
    }
    enterPassword(){
        console.log('Pasword entered')
    }
    clickLogin(){
        console.log("Login Successful")
    }
}  

class ProductPage extends BasePage implements PageRules{
    verifyPage(): void {
        console.log("Product Page verified")
    }
    searchProduct(){
        console.log("Products lists")
    }
    addToCart(){
        console.log("Product added to the cart")
    }
}

const Lobj = new LoginPage()

Lobj.waitForPageLoad()
Lobj.verifyPage()
Lobj.enterUsername()
Lobj.enterPassword()
Lobj.clickLogin()
Lobj.getPageTitle()

/* Output:

Wait for the Page to load
Login Page verified
Username entered
Pasword entered
Login Successful
Getting page title */