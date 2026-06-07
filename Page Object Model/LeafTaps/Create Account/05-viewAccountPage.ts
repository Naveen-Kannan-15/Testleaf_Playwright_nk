import { Page,expect } from "@playwright/test"

export class ViewAccountPage{
    page: Page

    async viewAccount(){
        await expect(this.page.locator('.tabletext').nth(2)).toBeVisible()
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}