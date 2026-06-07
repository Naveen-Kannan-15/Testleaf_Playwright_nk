import { Page } from "@playwright/test"

export class CreateLeadPage{
    page: Page

    async fillCreateLeadForm(companyName: string, firstName: string, lastName: string, salutation: string, qualification: string, revenue: string, department: string, email: string, phoneNumber: string) {
        await this.page.locator("#createLeadForm_companyName").fill(companyName)
        await this.page.locator("#createLeadForm_firstName").fill(firstName)
        await this.page.locator("#createLeadForm_lastName").fill(lastName)
        await this.page.locator("#createLeadForm_personalTitle").fill(salutation)
        await this.page.locator("#createLeadForm_generalProfTitle").fill(qualification)
        await this.page.locator('[id="createLeadForm_annualRevenue"]').fill(revenue)
        await this.page.locator("#createLeadForm_departmentName").fill(department)
        await this.page.locator("#createLeadForm_primaryEmail").fill(email)
        await this.page.locator("#createLeadForm_primaryPhoneNumber").fill(phoneNumber)
    }

    async clickSubmit(){
        await this.page.locator(".smallSubmit").click()
    }

    constructor(LocalPage: Page){
        this.page = LocalPage
    }
}