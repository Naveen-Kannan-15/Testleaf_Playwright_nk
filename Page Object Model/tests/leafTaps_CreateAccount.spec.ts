import { test, expect } from '@playwright/test'
import { LoginPage } from "../LeafTaps/Create Account/01-loginPage"
import { WelcomePage } from '../LeafTaps/Create Account/02-welcomePage'
import { HomePage } from '../LeafTaps/Create Account/03-homePage'
import { CreateAccountPage } from '../LeafTaps/Create Account/04-createAccountPage'
import { ViewAccountPage } from '../LeafTaps/Create Account/05-viewAccountPage'

test("Edit Leads in the LeafTaps Application", async ({ page }) => {

    const login = new LoginPage(page) // Passing the page object to the LoginPage class constructor
    await login.loadUrl("https://leaftaps.com/opentaps/control/login")
    await login.fillCreds("democsr2", "crmsfa")
    await login.clickLogin()

    const welcomePage = new WelcomePage(page) // Create an instance of the WelcomePage class
    await welcomePage.clickCRMSFA() // Call the clickCRMSFA method to perform the click action on the CRM/SFA link

    const homePage = new HomePage(page)
    await homePage.clickAccounts()
    await homePage.clickCreateAccounts()

    const createAccountPage = new CreateAccountPage(page)
    await createAccountPage.fillCreateAccountForm("NaveenK", "Naveen Local", "1000000")
    await createAccountPage.clickCreateAccount()

    const viewAccountPage = new ViewAccountPage(page)
    await viewAccountPage.viewAccount()

    console.log("Account information created successfully")

})