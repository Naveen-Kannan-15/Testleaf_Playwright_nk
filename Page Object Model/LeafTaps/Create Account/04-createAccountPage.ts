import { Page } from "@playwright/test"

export class CreateAccountPage{
    page: Page

    async fillCreateAccountForm(accountName: string, localName: string, revenue: string){
        await this.page.locator("#accountName").fill(accountName)
        await this.page.locator("#groupNameLocal").fill(localName)
        await this.page.locator("#annualRevenue").fill(revenue)
        await this.page.selectOption("#currencyUomId", { label: "INR - Indian Rupee" })
    }

    async clickCreateAccount(){
        await this.page.click('.smallSubmit')
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}