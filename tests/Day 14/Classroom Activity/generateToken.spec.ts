import { test,expect } from "@playwright/test"

// Global variables with any data type as Type Script always demands for the data type
let instanceUrl: any
let accessToken: any
let leadId: any

test.describe.serial("Create Lead after token generation", async () => { // describe.serial reduces the n number of workers to only 1 worker
    
test("Generate Token", async ({ request }) => {
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
            } // Alt + Shift + F to align all the lines
        }
    )
    const responseBody = await response.json() // Deserialization
    console.log(responseBody)

    instanceUrl = responseBody.instance_url // Local declaration
    accessToken = responseBody.access_token
})

/* OUTPUT:
{
  access_token: '00Dg500000AV10T!AQEAQFg96q0bBeHCm7CTrjBHavId7A6gaTVssD1j_NErTuHA2yVDYXUN0POvXa9vv_.VzcW32FTPPXqM7xbCHhmFMAZpwk_9',
  instance_url: 'https://orgfarm-81d3a1fe0e-dev-ed.develop.my.salesforce.com',
  id: 'https://login.salesforce.com/id/00Dg500000AV10TEAT/005g5000006uuLpAAI',
  token_type: 'Bearer',
  issued_at: '1780832439438',
  signature: 'GEe6+qERF+7nxtzam7L9FTVhTHXsbJBaC68+T1eoT8g='
} */


test("Create Lead in Salesforce Application", async ({ request }) => {
    const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Lead/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "Naveen",
                "LastName": "K",
                "Company": "Kaar Tech",
                "Title": "Engineer",
                "Email": "Test123@gmail.com",
                "Status": "Working - Contacted"
            },
        }
    )
    const responseBody = await response.json()// Deserialization
    console.log(responseBody)
    
    leadId = responseBody.id

    console.log(response.status()) // 201 
    console.log(response.statusText()) // OK

    // expect(response.status()).toBe(201) // Assertions
    // expect(response.statusText()).toBe("OK") // Assertions
})  

test("Fetch Lead from Salesforce", async ({request}) => {
    const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Lead/${leadId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )
    const responseBody = await response.json() //Deserialisation
    console.log(responseBody)
})

})