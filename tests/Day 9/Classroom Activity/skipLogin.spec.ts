import { test } from "@playwright/test";
test.use({storageState: "Data/salesForcelogin.json"})

test("Skip Login using Storage State", async ({page}) => {
    await page.goto("https://orgfarm-81d3a1fe0e-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    await page.waitForTimeout(3000)
})