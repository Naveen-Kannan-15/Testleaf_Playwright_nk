// Launch a Browser and login to the leaftaps application and create lead in the lead page

import { test } from "@playwright/test";
test ('Create Lead - Leaftaps', async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/login") // Navigating to the page
    await page.locator("#username").fill("democsr2") // Enter the user name
    await page.locator("#password").fill("crmsfa") // Enter the password
    await page.locator(".decorativeSubmit").click() // Click on login button
    await page.locator('//a[contains(text(),"CRM")]').click() // Click on CRM/SFA button
    await page.locator('//a[text()="Leads"]').click() // Click on Leads button
    await page.locator('//a[text()="Create Lead"]').click() // Click on Create Lead button
// Fill the necessary fields in the application
    await page.locator("#createLeadForm_companyName").fill("LeafTaps")
    await page.locator("#createLeadForm_firstName").fill("Naveen")
    await page.locator("#createLeadForm_lastName").fill("Kannan")
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")
    await page.locator("#createLeadForm_generalProfTitle").fill("MBBS")
    await page.locator('[id="createLeadForm_annualRevenue"]').fill("15,00,000")
    await page.locator("#createLeadForm_departmentName").fill("Research and Development")
    await page.locator("#createLeadForm_primaryEmail").fill("test123@gmail.com")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")
    await page.locator(".smallSubmit").click() // Click on Create Lead button
    const title = await page.title() // Fetching the Page Title
    console.log("The Title of the page is ", title) // Printing the Page Title

})