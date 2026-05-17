// Handle Dropdowns

import { test, expect } from '@playwright/test';

test('Handle Dropdowns', async ({ page }) => {
    await page.goto('https://leafground.com/select.xhtml')

    // Choose Favourite Tool
    await page.selectOption('//select[@class="ui-selectonemenu"]', { label: "Playwright" })
    let dropdownOptions = page.locator('//select[@class="ui-selectonemenu"]/option')
    let dropdownOptionsCount = await dropdownOptions.count()
    console.log(`The dropdown options count is : ${dropdownOptionsCount}`)
    for (let index = 0; index < dropdownOptionsCount; index++) {
        console.log(await dropdownOptions.nth(index).innerText())
    }
    console.log("Favourite tool is selected successfully")
    console.log("________________________")

    // Choose your preferred country.
    await page.locator('//span[@class="ui-icon ui-icon-triangle-1-s ui-c"]').first().click()
    await page.getByRole('option', {name:"India"}).click()
    console.log("Country is selected successfully")
    console.log("________________________")

    // Choose your preferred city.
    await page.locator('//span[@class="ui-icon ui-icon-triangle-1-s ui-c"]').nth(1).click()
    await page.locator('[data-label="Chennai"]').click()
    let cityOptions = page.locator('//ul[@id="j_idt87:city_items"]/li')
    let cityOptionsCount = await cityOptions.count()
    if(cityOptionsCount > 0){
        console.log("City is loaded successfully")
    }
    console.log("________________________")
    
    // Choose the best course.
    await page.getByRole("button", {name:"Show Options"}).click()
    await page.getByText("Postman").click()
    await page.getByRole("button", {name:"Show Options"}).click()
    await page.getByText("ReactJs").click()
    await page.getByRole("button", {name:"Show Options"}).click()
    await page.getByText("Appium").click()
    console.log("Best course is selected successfully")
    console.log("________________________")

    // Choose Language
    await page.locator('[class="ui-icon ui-icon-triangle-1-s ui-c"]').nth(2).click()
    await page.getByText("Tamil").last().click()
    let languageOptions = page.locator('//select[@id="j_idt87:lang_input"]/option')
    let languageOptionsCount = await languageOptions.count()
    console.log(`The dropdown options count is : ${languageOptionsCount}`)
    for (let index = 0; index < languageOptionsCount; index++) {
        console.log(await languageOptions.nth(index).innerText())
    }
    console.log("Language options displayed successfully")
    console.log("________________________")

    // Choose irrespective of the language chosen
    await page.getByText("Select Values").last().click()
    await page.locator('//ul[@id="j_idt87:value_items"]/li').nth(1).click()
    console.log("Values selected successfully")
})