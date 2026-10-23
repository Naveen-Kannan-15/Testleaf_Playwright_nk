import { test, expect } from "@playwright/test";
import { SFloginPage } from "../Marathon 3/loginPageSF";
import { SFHomePage } from "../Marathon 3/homePageSF";
import { SFLeadPage } from "../Marathon 3/leadPageSF";
test.use({storageState: "Data/salesForcelogin.json"})

let authToken: any
let instanceUrl: any
let leadId: any
let lastName: any

test.describe.serial(`Lead Creation, Modification, Deletion using API and Playwright`, async () => {

    test(`Generate Oauth token`, async ({ request }) => {
        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content_Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG97L7PWbPq6UwH4JRuhr9hnCnoOSWIbYVr22uMURPXlXOQMBu9REa.sJdPgG3EAy.8cZqxh8Cn1z1WS6ar",
                    "client_secret": "BE9CAEAF76AD5F0A70B2649410D1570645E4C724C42FCA8D676D30078C11D993",
                    "grant_type": "password",
                    "username": "naveenkannan1501@gmail.com",
                    "password": "Timesup@15ltdVsHrsTvqM19VZwYh4h0gB"
                }
            }
        )
        const responseBody = await response.json()
        authToken = responseBody.access_token
        instanceUrl = responseBody.instance_url

        expect(response.status()).toBe(200)
        console.log("The Oauth Token is generated successfully")
    })

    test(`Create Lead using API Automation`, async ({ request }) => {
        const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content_Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                data: {
                    "Salutation": "Mr.",
                    "LastName": "Kannan",
                    "Company": "Kaar Tech"
                }
            }
        )
        const responseBody = await response.json()
        leadId = responseBody.id
        expect(response.status()).toBe(201)
        console.log("The Lead has been successfully created")
    })

    test(`Update lead using API Automation`, async ({ request }) => {
        const response = await request.patch(`${instanceUrl}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content_Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                data: {
                    "Salutation": "Ms.",
                    "LastName": "Kavitha Marathon",
                    "Company": "Kaar Tech"
                }
            }
        )
        expect(response.status()).toBe(204)
        console.log("The Lead has been Updated successfully")
    })

    test(`View the Lead using API Automation`, async ({ request }) => {
        const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content_Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                }
            }
        )
        const responseBody = await response.json()
        expect(responseBody).toHaveProperty("LastName")
        expect(responseBody.LastName).toBeTruthy
        lastName = responseBody.LastName
        console.log(lastName)
        console.log("The Lead is viewed successfully")
    })

    test(`Delete Lead created through API Automation`, async ({ page }) => {

        /* const LoginObj = new SFloginPage(page)
        await LoginObj.loadUrl("https://login.salesforce.com/?locale.in")
        await LoginObj.fillLoginCreds("naveenkannan1501@gmail.com", "Timesup@15")
        await LoginObj.clickLogin() */

        await page.goto("https://orgfarm-81d3a1fe0e-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

        const HPobj = new SFHomePage(page)
        await HPobj.clickAppLauncher()
        await HPobj.clickViewAll()
        await HPobj.clickLeads()

        const LPobj = new SFLeadPage(page)
        await LPobj.searchLead(lastName)
        await LPobj.deleteLead()

        await expect(page.locator("//span[contains(.,'was deleted')]")).toBeVisible()
        console.log("The Lead is deleted successfully")
    })

})