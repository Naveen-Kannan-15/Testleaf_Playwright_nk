import { Page } from "@playwright/test"

export class HomePage{
    page: Page

    async clickLeads(){
        await this.page.click('//a[text()="Leads"]')
    }

    async clickCreateLeads(){
        await this.page.click('//a[text()="Create Lead"]')
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}