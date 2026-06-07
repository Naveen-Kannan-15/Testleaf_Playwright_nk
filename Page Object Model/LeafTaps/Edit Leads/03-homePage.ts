import { Page } from "@playwright/test"

export class HomePage{
    page: Page

    async clickLeads(){
        await this.page.click('//a[text()="Leads"]')
    }

    async clickMyLeads(){
        await this.page.click('//a[text()="My Leads"]')
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}