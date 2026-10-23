import { test, expect } from "@playwright/test";

let accessToken: any
let instanceUrl: any
let opportunityId: any
let status: any

test.describe.serial(`Salesforce Opportunity Creation, Modification & Deletion`, async () => {

    test(`Generate Token`, async ({ request }) => {
        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG97L7PWbPq6UwH4JRuhr9hnCnoOSWIbYVr22uMURPXlXOQMBu9REa.sJdPgG3EAy.8cZqxh8Cn1z1WS6ar",
                    "client_secret": "BE9CAEAF76AD5F0A70B2649410D1570645E4C724C42FCA8D676D30078C11D993",
                    "grant_type": "password",
                    "password": "Timesup@15ltdVsHrsTvqM19VZwYh4h0gB",
                    "username": "naveenkannan1501@gmail.com"
                }
            }
        )
        const responseBody = await response.json()

        expect(response.status()).toBe(200)
        expect(responseBody).toHaveProperty("access_token")
        expect(responseBody).toHaveProperty("token_type")
        expect(responseBody).toHaveProperty("instance_url")

        expect(responseBody.access_token).toBeTruthy()
        expect(responseBody.instance_url).toBeTruthy()
        expect(responseBody.token_type).toBe("Bearer")

        accessToken = responseBody.access_token
        instanceUrl = responseBody.instance_url
        console.log("The Auth Token is generated")

    })

    test(`Create Opportunity using API automation`, async ({ request }) => {
        const response = await request.post(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                data: {
                    "Name": "Naveen Opportunity",
                    "CloseDate": "2026-12-31",
                    "StageName": "Qualification",
                    "NextStep": "Planning"
                }
            }
        )
        const responseBody = await response.json()
        opportunityId = responseBody.id
        console.log("The Opportunity is created successfully")
    })

    test(`View Opportunity using API Automation`, async ({ request }) => {
        await request.get(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity${opportunityId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        )
    })
    test(`Update the Opportunity using API Automation`, async ({ request }) => {
        await request.patch(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity${opportunityId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                data: {
                    "CloseDate": "2026-06-30",
                    "Name": "Naveen Kannan Opportunity"
                }
            }
        )
        console.log("The Opportunity is updated successfully")
    })

    test(`Delete the Opportunity using API Automation`, async ({request}) => {
        await request.delete(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity${opportunityId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        )
        console.log("The Opportunity is deleted successfully")
    })
})