class BasePage{
    findElement(){
        console.log("Finding element in BasePage")
    }
    clickElement(){
        console.log("Clicking element in BasePage")
    }
    enterText(){
        console.log("Entering text in BasePage")
    }
    performCommonTasks(){
        console.log("Performing common tasks in BasePage")
    }
}

const basePage = new BasePage()
basePage.performCommonTasks() // Output: Performing common tasks in BasePage 

class LoginPage extends BasePage{
    performCommonTasks(){
        console.log("Performing common tasks in LoginPage")
    }
}

const loginPage = new LoginPage()
loginPage.findElement()
loginPage.clickElement()
loginPage.enterText()
loginPage.performCommonTasks() // Method Overriding: Output: Performing common tasks in LoginPage