import { Page, expect } from '@playwright/test';

export class ViewLeadPage {
    page: Page

    async validate(){
        await expect(this.page.locator('#viewLead_statusId_sp')).toContainText('Assigned')
    }

    constructor(LocalPage: Page) {
        this.page = LocalPage
    }
}