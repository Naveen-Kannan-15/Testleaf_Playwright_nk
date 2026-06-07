import { Page } from "@playwright/test"

export class HomePage{
    page: Page

    async clickAccounts(){
        await this.page.click('//a[text()="Accounts"]')
    }

    async clickCreateAccounts(){
        await this.page.click('//a[text()="Create Account"]')
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}