import { test } from "@playwright/test";
import credentials from "../../../Data/login.json"; // Data Connectivity is done here

test.describe.serial("Test to be executed in serial mode", () => {

    let records: any; // global
    /* ************************** */
    //beforeAll - Load JSON data
    test.beforeAll("Read data from JSON", async () => {
        console.log("beforeAll data connectivity");
        //Assign the imported JSON to records variable
        records = credentials
        console.log(records);
    })

    /* ************************** */
    //beforeEach - Login FUnctionality
    test.beforeEach("BeforeEach for login in for each test module", async ({ page }) => {
        await page.goto("https://leaftaps.com/opentaps/control/main");
        // Dynamic JSON data
        await page.locator("#username").fill(records[0].Username);
        await page.locator("#password").fill(records[0].Password);
        await page.waitForTimeout(3000)
        await page.locator(".decorativeSubmit").click();
        await page.locator('//a[contains(text(),"CRM")]').click()
        console.log("BeforeEach happens for each module");
    });

    /* ************************** */
    //test function
    test("Lead Module", async ({ page }) => {
        console.log("Executing Lead Module");
        await page.locator('//a[text()="Leads"]').click()
    })

    test("Account Module", async ({ page }) => {
        console.log("Executing Account Module");
        await page.locator('//a[text()="Accounts"]').click()
    })

    /* ************************** */
    //afterEach() - Collecting the output of each test
    test.afterEach("Fetch the test status of each test", async ({ }, testInfo) => { // testInfo is to reterive the output of each test after execution
        console.log("Executing after each test");
        console.log(testInfo.status);
    })

    /* ************************** */
    //afterAll - Pushing the entire report to test management
    test.afterAll("Upload all the reports at ones", async () => {
        console.log("Executed after all the test cases have complted or received the output");
        console.log("The report is uploaded into test managment tool");
    })

});