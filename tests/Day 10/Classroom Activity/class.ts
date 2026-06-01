 // Learn class and always use the class name in Capital letter in the beginning

class LoginPage {
    // Properties
    browserName = "Chrome"
    url = "https://leaftaps.com/crmsfa/control/main"
    username = "democsr2"
    password = "crmsfa"
    
    // Method
    launch(){
        console.log(`Launch the browser: ${this.browserName}`)
    }
    loadUrl(){
        console.log("Load this URL: " + this.url)
    }
    enterCreds(){
        console.log("Enter the username and the password as " + this.username + " and " + this.password)
    }
    login(){
        console.log("Click the login button")
    }
    // Parameterized Method using local variable and argument, similarly to function
    launch2(browsername : string){
        console.log(`Launch the browser: ${browsername}`)
    }
}
const lopojb = new LoginPage()
lopojb.launch()
lopojb.loadUrl()
lopojb.enterCreds()
lopojb.login()
// Calling the method with passing argument
lopojb.launch2("MsEdge") // Note line number 23 // Parameterized method