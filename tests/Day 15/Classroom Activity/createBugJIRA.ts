import axios from "axios";
let username = "naveenkannan1501@gmail.com"
let password:any = "ATATT3xFfGF0aLZH_v7l_OKjnI2hZCh_di_Ysf5zS0VWHLLHESFzrTkipRP149c5gtXVi6zaGJBjqTlD6x7W46hx6fyGPHYVNOJrPLSvuR21rcKTsobtN8de-V8PR7oa8UeegQt3gLyD7upQpAZpdvfWV4gu7e6asBxeLIDhGyWxzITjX8Cn-Cs=9F4D5CA7"
async function createIssue() {
    const response = await axios.post("https://naveenkannan1501.atlassian.net/rest/api/2/issue",
        {
            "fields": {
                "project": {
                    "key": "PLAYW"
                },
                "issuetype": {
                    "name": "Bug"
                },
                "summary": "Test case for login functonality created throug POSTMAN",
                "description": "Checking the login functionality"
            }
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
            auth: {
                "username": username,
                "password": password
            }
        },
    )
    const responseData = response.data
    console.log("The ID of the Bug is "+responseData.id+ " with key as "+ responseData.key)
}

createIssue()