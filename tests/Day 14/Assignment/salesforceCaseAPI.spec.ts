import { test, expect } from "@playwright/test";

let accessToken: any
let instanceUrl: any
let caseId: any
let status : any

test.describe.serial(`Salesforce Case Creation, Modification & Deletion`, async () => {
    
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

test('Create Case in Salesforce', async ({ request }) => {
    const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Case/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Origin": "Email",
                "Status": "New"
            }
        }
    )
    const responseBody = await response.json()

    expect(response.status()).toBe(201)
    expect(responseBody.id).toBeTruthy()
    caseId = responseBody.id
    console.log("The Case is created successfully")

})

test(`Fetch the Case`, async ({ request }) => {
    const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Case/${caseId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )

    expect(response.status()).toBe(200)
    console.log("The case is viewed successfully")

})

test(`Update details of the case`, async ({ request }) => {
    await request.patch(`${instanceUrl}/services/data/v65.0/sobjects/Case/${caseId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Status": "Working",
                "Priority": "Low",
                "Origin": "Phone",
                "SLAViolation__c": "No"
            }
        }
    )
    const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Case/${caseId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("Status")
    status = responseBody.Status
    expect(status).toContain("Working")
    console.log("Case is edited successfully and Status is Working")

})

test(`Delete the created case`, async ({request}) => {
    const response = await request.delete(`${instanceUrl}/services/data/v65.0/sobjects/Case/${caseId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    expect(response.status()).toBe(204)
    console.log("Successfully deleted the case")

})

})