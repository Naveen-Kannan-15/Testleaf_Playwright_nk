import { Page,expect } from "@playwright/test"

export class SFHomePage {
    page: Page
    constructor(LocalPage: Page) {
        this.page = LocalPage
    }
    async clickAppLauncher(){
        await this.page.click('.slds-icon-waffle')
        await expect(this.page.locator('//h2[text()="App Launcher"]')).toBeVisible()
        console.log("The App Launcher is visible")
    }
    async clickViewAll(){
        await this.page.click("//button[text()='View All']")
    }
    async clickLeads(){
        await this.page.click('//p[text()="Leads"]')
        await this.page.waitForLoadState('domcontentloaded')
    }
    async clickDashboard(){
        await this.page.click('//p[text()="Dashboards"]')
        await this.page.waitForLoadState('domcontentloaded')
        expect(this.page.url()).toContain('https://orgfarm-81d3a1fe0e-dev-ed.develop.lightning.force.com/lightning/o/Dashboard/home?queryScope=mru')
        console.log("The Dashboard page is navigated successfully")
    }
}