// // class LoginPage {

// //     //properties are hard coded data that can be used across all the methods wriiten inside the class
// //     browserName = "Chrome"; // GLobal variable
// //     url = "https://leaftaps.com/opentaps/control/main";
// //     username = "democsr2";
// //     password = "crmsfa"

// //     //methods are block of code that is to perform an action and is dependant on th class

// //     launch() { // Step1
// //         console.log(Launching of browser ${this.browserName});
// //     }

// //     loadurl(){ // Step2
// //         console.log(Loading the url ${this.url});        
// //     }

// //     fillCredentials(){
// //         console.log(Fill username and password ${this.username} and ${this.password});        
// //     }

// //     clickLogin(){

// //         console.log("Click the login button");
        
// //     }

// // }

// // const x ="Hello" // declaration

// // const lopobj = new LoginPage() // syntax to create an object to access the methods and properites of a class as well creating a memory to store the class

// // lopobj.launch()
// // lopobj.loadurl()
// // lopobj.fillCredentials()
// // lopobj.clickLogin()




// //function block is independent and is invoked by its name
// // function launch() {
// //     console.log("Launching of browser");

// // }

// // launch()



// class LoginPage2 {

//     //properties are data that can be used across all the methods wriiten inside the class
//     // browserName = "Chrome";
//     // url = "https://leaftaps.com/opentaps/control/main";
//     // username = "democsr2";
//     // password = "crmsfa"

//     //methods are block of code that is to perform an action and is dependant on th class

//     launch(browserName:string) { // Step1 // internally browserName= Chrome
//         console.log(`Launching of browser ${browserName}`);
//     }

//     loadurl(url:string){ // Step2 // here url is a Local Variable
//         console.log(`Loading the url ${url}`);        
//     }

//     fillCredentials(username:string,password:string){
//         console.log(`Fill username and password ${username} and ${password}`);        
//     }

//     clickLogin(){

//         console.log("Click the login button");
        
//     }

// }

// const x ="Hello" // declaration

// const lopobj = new LoginPage2 // syntax to create an object to access the methods and properites of a class as well creating a memory to store the class

// lopobj.launch("Chrome")
// lopobj.loadurl("https://leaftaps.com/opentaps/control/main")
// lopobj.fillCredentials("democsr2","crmsfa")
// lopobj.clickLogin()

// /* Conclusion :

// 1. use "this" keyword to access global variables/property
// 2. "this" keyword should not be used for local variable while we pass it as a argument while invoking a method using an object */