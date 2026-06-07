import { Page } from "@playwright/test"

export class MyLeadsPage{
    page: Page

    async clickFirstLead(){
        await this.page.locator('.linktext').nth(3).click()
    }

    async clickEdit(){
        await this.page.click('//a[contains(text(),"Edit")]')
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}