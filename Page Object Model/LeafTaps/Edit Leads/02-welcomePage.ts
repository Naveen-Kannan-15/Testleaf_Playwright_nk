import { Page } from "@playwright/test"

export class WelcomePage{
    page: Page // Declare a property to hold the Page object

    async clickCRMSFA(){
        await this.page.locator('//a[contains(text(),"CRM")]').click()
    }

    constructor(LocalPage : Page){ // Constructor to initialize the Page property
        this.page = LocalPage // Local Initialization of the Page property with the provided page object
    }
}