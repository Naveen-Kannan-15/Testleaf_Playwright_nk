// import { APIRequestContext } from "@playwright/test"

// export class TokenGenerate {
//     request : APIRequestContext
//     constructor(LocalRequest: APIRequestContext){
//         this.request = LocalRequest
//     }
//     tokenGenerate(){

//     }
// }

// export class LeadCreate{
//     request : APIRequestContext
//     constructor(LocalRequest: APIRequestContext){
//         this.request = LocalRequest
//     }
// }

// export class LeadView{
//     request : APIRequestContext
//     constructor(LocalRequest: APIRequestContext){
//         this.request = LocalRequest
//     }
// }

// import {APIRequestContext, test} from "@playwright/test"
// import { request } from "node:http";

// export function generateToken(request:APIRequestContext){
//     test(`Generate Token`, async ({ request }) => {
//         const response = await request.post("https://login.salesforce.com/services/oauth2/token",
//             {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded"
//                 },
//                 form: {
//                     "client_id": "3MVG97L7PWbPq6UwH4JRuhr9hnCnoOSWIbYVr22uMURPXlXOQMBu9REa.sJdPgG3EAy.8cZqxh8Cn1z1WS6ar",
//                     "client_secret": "BE9CAEAF76AD5F0A70B2649410D1570645E4C724C42FCA8D676D30078C11D993",
//                     "grant_type": "password",
//                     "password": "Timesup@15ltdVsHrsTvqM19VZwYh4h0gB",
//                     "username": "naveenkannan1501@gmail.com"
//                 }
//             }
//         )
//         const responseBody = await response.json()
//         console.log(responseBody);

// })
// }

// generateToken()  

import { APIRequestContext } from "@playwright/test";
let accessToken: any
let instanceUrl: any
let leadId: any

export async function generateToken(request: APIRequestContext): Promise<void> {
    // token generation logic
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

    const body = await response.json()
    console.log(body)
    accessToken = body.access_token
    instanceUrl = body.instance_url
    console.log("The Auth Token is generated")

}

export async function createResource(request: APIRequestContext, lastName: string, companyName: string): Promise<string> {
    const response = await request.post(`${instanceUrl}/services/data/v65.0/sobjects/Lead/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            data: {
                "LastName": `${lastName}`,
                "Company": `${companyName}`,
            }
        }
    )
    const body = await response.json()
    console.log(body)
    return body.id;
    leadId = body.id
}



export async function getResource(request: APIRequestContext, leadId: string): Promise<{ LastName: string }> {

    const response = await request.get(`${instanceUrl}/services/data/v65.0/sobjects/Lead/${leadId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }
    )

    const body = await response.json();
    return body.LastName
}