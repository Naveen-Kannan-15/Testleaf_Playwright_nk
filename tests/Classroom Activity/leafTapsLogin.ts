import { Page } from "@playwright/test"

export class LeaftapsLogin {
    page : Page
    async loadUrl(url:string){
        await this.page.goto(url)
    }
    async fillCreds(username:string, password:string){
        await this.page.locator("#username").fill(username)
        await this.page.locator("#password").fill(password)
    }
    async clickLogin(){
        await this.page.locator(".decorativeSubmit").click()
    }
    constructor(LocalPage : Page){ // Page Fixture is firstly assigned to the constructor and then passed to the Global declaration and passed to other methods
        this.page = LocalPage
    }
}