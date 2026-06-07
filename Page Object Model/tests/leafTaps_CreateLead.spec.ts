import { test, expect } from '@playwright/test'
import { LoginPage } from "../LeafTaps/Create Leads/01-loginPage"
import { WelcomePage } from '../LeafTaps/Create Leads/02-welcomePage'
import { HomePage } from '../LeafTaps/Create Leads/03-homePage'
import { CreateLeadPage} from '../LeafTaps/Create Leads/04-createLeadPage'
import { ViewLeadPage } from '../LeafTaps/Create Leads/05-viewLeadPage'

test("Create Leads in the LeafTaps Application", async ({ page }) => {

    const login = new LoginPage(page) // Passing the page object to the LoginPage class constructor
    await login.loadUrl("https://leaftaps.com/opentaps/control/login")
    await login.fillCreds("democsr2", "crmsfa")
    await login.clickLogin()

    const welcomePage = new WelcomePage(page) // Create an instance of the WelcomePage class
    await welcomePage.clickCRMSFA() // Call the clickCRMSFA method to perform the click action on the CRM/SFA link

    const homePage = new HomePage(page)
    await homePage.clickLeads()
    await homePage.clickCreateLeads()

    const createLeadPage = new CreateLeadPage(page)
    await createLeadPage.fillCreateLeadForm("LeafTaps", "Naveen", "Kannan", "Mr.", "MBBS", "15,00,000", "Research and Development", "test123@gmail.com", "9876543210")
    await createLeadPage.clickSubmit()
    
    const viewLeadPage = new ViewLeadPage(page)
    await viewLeadPage.validate()
    console.log("Lead created successfully")

})