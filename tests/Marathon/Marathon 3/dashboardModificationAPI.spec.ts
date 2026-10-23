import { test, expect } from "@playwright/test";
import { SFloginPage } from "../Marathon 3/loginPageSF";
import { SFHomePage } from "../Marathon 3/homePageSF";
import { SFLeadPage } from "../Marathon 3/leadPageSF";
test.use({ storageState: "Data/salesForcelogin.json" })

test(`Create Dashboard using Playwright`, async ({ page }) => {

    await page.goto("https://orgfarm-81d3a1fe0e-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

    expect(page.title).toContain("Home | Salesforce")
    console.log("The Navigation is successful")
    
    const HPobj = new SFHomePage(page)
    await HPobj.clickAppLauncher()
    await HPobj.clickViewAll()
    await HPobj.clickDashboard()



})