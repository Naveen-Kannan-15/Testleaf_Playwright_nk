// Normal Class with Properties and Methods

class LoginUrl {
    // Properties
    browser : string = 'Chrome'
    url : string = "https://leaftaps.com/crmsfa/control/main"

    // Methods
    launch(){
        console.log(this.browser)
    }
    loadUrl(){
        console.log(this.url)
    }
}

const LU = new LoginUrl()
LU.launch()
LU.loadUrl()

/* OUTPUT:

Chrome
https://leaftaps.com/crmsfa/control/main */

// Parameterised Constructors (Properties initialised within a constructor)

class LoginUrl1 {
    // Properties are declared globally
    browser : string
    url : string

    // Methods
    launch(){
        console.log(this.browser)
    }
    loadUrl(){
        console.log(this.url)
    }
    constructor(){ // Properties are initialised locally and connect to the Global Declaration by using "this" keyword
        this.browser  = 'Chrome'
        this.url = "https://leaftaps.com/crmsfa/control/main"
    }
}

const LU1 = new LoginUrl1()
LU1.launch()
LU1.loadUrl()

/* OUTPUT:

Chrome
https://leaftaps.com/crmsfa/control/main */