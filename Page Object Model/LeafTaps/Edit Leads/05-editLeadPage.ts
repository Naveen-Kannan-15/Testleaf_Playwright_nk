import { Page } from "@playwright/test"

export class EditLeadPage{
    page: Page

    async editLeadInfo(firstName: string, lastName: string){
        await this.page.locator('#updateLeadForm_firstName').fill(firstName)
        await this.page.locator('#updateLeadForm_lastName').fill(lastName)
        await this.page.selectOption('#updateLeadForm_industryEnumId',{label: "Manufacturing"})
    }

    async clickUpdate(){
        await this.page.click(".smallSubmit")
    }

    constructor(LocalPage:Page){
        this.page = LocalPage
    }
}