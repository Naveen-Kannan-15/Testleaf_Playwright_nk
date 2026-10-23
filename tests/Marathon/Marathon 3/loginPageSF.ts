import { Page } from "@playwright/test";

export class SFloginPage{
    page : Page
    constructor(LocalPage : Page){
        this.page = LocalPage
    }
    async loadUrl(url : string){
        await this.page.goto(url)
        await this.page.waitForLoadState('domcontentloaded')
    }
    async fillLoginCreds(username:string, password:string){
        await this.page.fill('#username', username)
        await this.page.fill('#password', password)
    }
    async clickLogin(){
        await this.page.click('#Login')
    }
}