import { test, expect } from '@playwright/test'
import { LoginPage } from "../LeafTaps/Edit Leads/01-loginPage"
import { WelcomePage } from '../LeafTaps/Edit Leads/02-welcomePage'
import { HomePage } from '../LeafTaps/Edit Leads/03-homePage'
import { MyLeadsPage } from '../LeafTaps/Edit Leads/04-myLeadsPage'
import { EditLeadPage } from '../LeafTaps/Edit Leads/05-editLeadPage'

test("Edit Leads in the LeafTaps Application", async ({ page }) => {

    const login = new LoginPage(page) // Passing the page object to the LoginPage class constructor
    await login.loadUrl("https://leaftaps.com/opentaps/control/login")
    await login.fillCreds("democsr2", "crmsfa")
    await login.clickLogin()

    const welcomePage = new WelcomePage(page) // Create an instance of the WelcomePage class
    await welcomePage.clickCRMSFA() // Call the clickCRMSFA method to perform the click action on the CRM/SFA link

    const homePage = new HomePage(page)
    await homePage.clickLeads()
    await homePage.clickMyLeads()

    const myLeadsPage = new MyLeadsPage(page)
    await myLeadsPage.clickFirstLead()
    await myLeadsPage.clickEdit()

    const editLeadPage = new EditLeadPage(page)
    await editLeadPage.editLeadInfo("Naveen", "Kannan")
    await editLeadPage.clickUpdate()

    await expect(page.locator('#viewLead_industryEnumId_sp')).toContainText("Manufacturing")
    console.log("Lead information updated successfully")

})