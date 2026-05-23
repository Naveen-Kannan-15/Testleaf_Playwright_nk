// //Storage State:



// import { test, expect } from "@playwright/test";


// test("Learn Storage state", async ({ page,context }) => {


//     await page.goto("https://login.salesforce.com/?locale=in");


//     await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com")


//     await page.getByLabel("Password", { exact: true }).fill("Ravisalesplay#1234")


//     await page.getByRole("button", { name: "Log In" }).click(); // Login Page


//     await page.getByTitle("App Launcher", { exact: true }).click(); // Home Page


//     await context.storageState({path:"Data/login.json"}) // syntax to captute the local storage from the session


//     // await page.waitForTimeout(3000)



// })