


import { test } from "@playwright/test";


test(`Learn Xpath and handle the dropdown`, async ({ page }) => {


    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("R");
    //    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:'LEAD_DIRECTMAIL'}); // OPtion 1 value is the first priority for the reason that it is conected to backedn
    //   await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { label: 'Direct Mail' }); // OPtion 2 using visible text
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); // OPtion 3 using index

// To get all the dropdown values from a drop down use the below method

    const alldropDownValues = page.locator('//select[@id="createLeadForm_dataSourceId"]/option'); //  This locators has 13 dropdown values
    const dropDownCount = await alldropDownValues.count(); // alldropDownValues is holding 13 locator objects
    console.log(`The dropdpwn count is ${dropDownCount}`);

    // console.log(await alldropDownValues.nth(0).innerText()); // blank
    // console.log(await alldropDownValues.nth(1).innerText()); //Cold Call
    // console.log(await alldropDownValues.nth(2).innerText()); //Conference
    // alldropDownValues.nth(3);//Direct Mail

    for (let index = 0; index < dropDownCount; index++) {
        console.log(await alldropDownValues.nth(index).innerText());
    }


    const allIndustryValues = page.locator('//select[@id="createLeadForm_industryEnumId"]/option')
    const allIndustryValuesCount = await allIndustryValues.count()
    console.log("The count of the Industries Dropdown values are : ", allIndustryValuesCount)

    for (let index = 0; index < allIndustryValuesCount ; index++) {
        console.log(await allIndustryValues.nth(index).innerText())       
    }

    await page.waitForTimeout(3000)
})