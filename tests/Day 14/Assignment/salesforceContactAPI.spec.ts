import { test, expect } from "@playwright/test";

let accessToken: any
let instanceUrl: any
let accountId: any
let contactId: any

test.describe.serial(`Contact Creation, Modification & Deletion`, async () => {
    
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

test(`Create Account using API`, async ({ request }) => {
    const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Account/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Name": "Credits"
            }
        }
    )
    const responseBody = await response.json()
    accountId = responseBody.id

})

test(`Create Contact using API Automation`, async ({ request }) => {
    const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Contact/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "Naveen",
                "LastName": "Kannan",
                "Email": "test@gmail.com",
                "AccountId": `${accountId}`
            }
        }
    )
    const responseBody = await response.json()
    contactId = responseBody.id
    console.log("The Contact is created successfully")

})

test(`View Contact using API Automation`, async ({ request }) => {
    const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Contact/${contactId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("Name")
    console.log("The Name of the Contact created is: ", responseBody.Name)
    expect(response.status()).toBe(200)
    console.log("The Contact is viewed successfully")

})

test(`Update contact using API Automation`, async ({ request }) => {
    const response = await request.patch(`${instanceUrl}/services/data/v65.0/sobjects/Contact/${contactId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Email": "Test123@gmail.com",
                "Phone": "9876543210",
                "Title": "MBBS",
                "Department": "Heart Surgeon"
            }
        }
    )
    expect(response.status()).toBe(204)
    console.log("The Contact has been updated successfully")

})


test(`Delete Contact using API Automation`, async ({ request }) => {
    const response = await request.delete(`${instanceUrl}/services/data/v65.0/sobjects/Contact/${contactId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    expect(response.status()).toBe(204)
    console.log("The Contact has been deleted successfully")

})

})