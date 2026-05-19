import { test } from "@playwright/test";

test("Learn Playwright Locators", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    //   await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("Username", { exact: true }).fill("dilipkumar.rajendran@testleaf.com")
    //   await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
    await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025")
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.waitForTimeout(3000)
})

test("Learn Playwright Locators 2", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    //   await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("Username", { exact: true }).fill("dilipkumar.rajendran@testleaf.com")
    //   await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025");
    await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025")
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.getByText("View All",{exact:true}).nth(2).click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");
    await page.waitForTimeout(3000)
})