import { Page } from '@playwright/test'

export class LoginPage{ // Exporting the LoginPage class to be used in other parts of the application
    page : Page // Declare a property to hold the Page object
    async loadUrl(url : string){ // Define an asynchronous method to load the URL
        await this.page.goto(url) // using this.page to navigate to the specified URL
        await this.page.waitForLoadState() // Wait for the page to load completely before proceeding
    }

    async fillCreds(username: string, password: string){
        await this.page.locator("#username").fill(username)
        await this.page.locator("#password").fill(password)
    }

    async clickLogin(){
        await this.page.locator('.decorativeSubmit').click()
    }
    
    constructor(LocalPage : Page){ // Constructor to initialize the Page property
        this.page = LocalPage // Local Initialization of the Page property with the provided page object
    }
}