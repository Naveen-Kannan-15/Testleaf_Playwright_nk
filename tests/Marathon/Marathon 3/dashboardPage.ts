import { Page,expect } from "@playwright/test"

export class SFDashBoardPage {
    page: Page
    refpage : Page
    constructor(LocalPage: Page, refpage ) {
        this.page = LocalPage
        this.refpage : Page
    }
    async clickNewDashboard(){
        await this.page.click('//div[text()="New Dashboard"]')
        const refpage = this.page.frameLocator('[title="dashboard"]')
        await expect(this.refpage.locator('//h1[text()="New Dashboard"]')).toBeVisible()
        console.log("The Pop-up shows")

    }
}