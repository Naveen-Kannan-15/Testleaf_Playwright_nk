import { Page } from "@playwright/test"

export class SFHomePage {
    page: Page
    constructor(LocalPage: Page) {
        this.page = LocalPage
    }
    async clickAppLauncher(){
        await this.page.click('.slds-icon-waffle')
    }
    async clickViewAll(){
        await this.page.click("//button[text()='View All']")
    }
    async clickLeads(){
        await this.page.click('//p[text()="Leads"]')
        await this.page.waitForLoadState('domcontentloaded')
    }
}