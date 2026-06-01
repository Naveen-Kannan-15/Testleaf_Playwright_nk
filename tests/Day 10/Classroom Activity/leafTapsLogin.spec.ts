import { test } from "@playwright/test";
import { LeaftapsLogin } from "../Classroom Activity/leafTapsLogin.ts"

test("Learn POM", async ({page}) => {

    // Login to Leaftaps
    const loginObj = new LeaftapsLogin(page)
    await loginObj.loadUrl("https://leaftaps.com/opentaps/control/main")
    await loginObj.fillCreds("democsr2", "crmsfa")
    await loginObj.clickLogin()
})