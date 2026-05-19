/* 
Write a Playwright script to perform the following actions on the Salesforce login page:
1. Navigate to the Salesforce login page.
2. Use different CSS selector strategies (ID, Class, Attribute) to locate the username and password fields.
3. Enter sample credentials into the username and password fields.
4. Click the login button using a CSS selector.
5. Verify that the login was successful by checking for a specific element on the landing page.


https://login.salesforce.com/?locale=in
Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025 */

import { test,expect } from "@playwright/test";
test("Launch Salesforce Application", async ({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in") // Navigate to the page
    await page.locator('.username').first().fill("dilipkumar.rajendran@testleaf.com") // Enter the Username or email
    await page.locator('.password').fill("TestLeaf@2025") // Enter the password
    await page.locator('#Login').click() // Click the Login button
    await expect (page.locator('[title="Service"]')).toBeVisible() // Verify if the title Service is present in the landing page usign toBeVisible method
    await page.waitForTimeout(5000) // Make the page to wait for 5 seconds and close it
})