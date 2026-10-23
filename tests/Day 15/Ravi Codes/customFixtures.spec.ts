import { test } from "@playwright/test";
import dotenv from "dotenv"
import { testobj } from "../utility/customFixtures";

dotenv.config({ path: "Data/qa.env" })

testobj("Learn POM Login", async ({ page, loginfix, wpfix, hpfix, lpfix, clpfix, vpfix }) => { // testobj => page + readily available objects
    //login page
    // const loginobj = new LoginPage(page)
    // await loginobj.loadurl(process.env.BaseUrl as string)
    // await loginobj.fillCredentials(process.env.LF_Username as string, process.env.LF_Password as string)
    // await loginobj.clickLogin()

    //when custom fixture is ready
    await loginfix.loadurl(process.env.BaseUrl as string)
    await loginfix.fillCredentials(process.env.LF_Username as string, process.env.LF_Password as string)
    await loginfix.clickLogin()

    //welcome page
    // const wp = new WelcomePage(page)
    // await wp.clickCRM()
    await wpfix.clickCRM()

    //home page
    // const hp = new HomePage(page)
    // await hp.clickLeads()
    await hpfix.clickLeads()

    //lead page
    // const lp = new LeadPage(page)
    // await lp.clickCreateLead()
    await lpfix.clickCreateLead()

    //create lead page
    // const clp = new CreateLeadPage(page)
    // await clp.enterMandatoryField()
    // await clp.clickSubmit()
    await clpfix.enterMandatoryField()
    await clpfix.clickSubmit()

    //view lead page
    // const vp = new ViewLeadPage(page)
    // await vp.verifyFirstName()
    await vpfix.verifyFirstName()
    await page.waitForTimeout(3000) // demo

})