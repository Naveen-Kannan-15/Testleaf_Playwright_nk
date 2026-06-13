import { Page } from "@playwright/test"

export class SFLeadPage {
    page: Page
    constructor(LocalPage: Page) {
        this.page = LocalPage
    }
    async searchLead(lastName:string){
        await this.page.fill('[placeholder="Search this list..."]', lastName)
        await this.page.keyboard.press("Enter")
    }
    async deleteLead(){
        await this.page.locator('[part="indicator"]').nth(1).click()
        await this.page.locator('//span[text()="Show Actions"]').first().click()
        await this.page.locator('//a[@class="highlightButton"]').nth(1).click()
        await this.page.locator('//span[text()="Delete"]').click()
    }
}