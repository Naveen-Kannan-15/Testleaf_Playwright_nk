import { test,expect } from "@playwright/test";
import credentials from "../../../Data/login.json"

test("Data Parameterization using JSON", async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill(credentials.username)
    await page.locator('[id="password"]').fill(credentials.password)
    await page.locator('[type="submit"]').click()
    await page.locator('[id="label"]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()
    let cname = "TestLeaf"
    let fname = "Naveen"
    let lname = "Kannan"
    await page.locator("#createLeadForm_companyName").fill(cname)
    await page.locator("#createLeadForm_firstName").fill(fname)
    await page.locator("#createLeadForm_lastName").fill(lname)
    await page.selectOption('//select[@name="dataSourceId"]',{label:"Direct Mail"})
    await page.selectOption('//select[@name="marketingCampaignId"]',{value:"DEMO_MKTG_CAMP"})

    const mcDropdown = page.locator('//select[@name="marketingCampaignId"]/option')
    const mcDropdownCount = await mcDropdown.count()
    console.log("The Count of the Marketing Campaign Dropdown Values is: ", mcDropdownCount)

    for (let index = 0; index < mcDropdownCount; index++) {
        console.log("The Value of " + index + " is " + await mcDropdown.nth(index).innerText())
    }

    await page.selectOption('//select[@name="industryEnumId"]',{index:6})
    await page.selectOption('//select[@name="currencyUomId"]',{label:"INR - Indian Rupee"})
    await page.selectOption('//select[@name="generalCountryGeoId"]',{label:"India"})
    await page.selectOption('//select[@name="generalStateProvinceGeoId"]',{label:"TAMILNADU"})

    const stateDropdown = page.locator('//select[@name="generalStateProvinceGeoId"]/option')
    const stateCount = await stateDropdown.count()
    console.log("The Count of the states in India is:", stateCount)
    console.log("The States of India are as follows: ")
    for (let index = 1; index < stateCount; index++) {
        console.log(await stateDropdown.nth(index).innerText())       
    }
    await page.locator(".smallSubmit").click()
    await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned")
    console.log("The Lead is created as per the requirements")
})