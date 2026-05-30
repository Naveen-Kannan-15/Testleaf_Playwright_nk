// class LoginPage1 {


//     //properties are data that can be used across all the methods wriiten inside the class
//     // browserName = "Chrome";
//     // url = "https://leaftaps.com/opentaps/control/main";
//     // username = "democsr2";
//     // password = "crmsfa"


//     //methods are block of code that is to perform an action and is dependant on th class


//     launch(browserName: string) { // Step1 // internally browserName= Chrome
//         console.log(`Launching of browser for LoginPage ${browserName}`);
//     }


//     loadurl(url: string) { // Step2 // here url is a Local Variable
//         console.log(`Loading the url LoginPage ${url}`);
//     }


//     fillCredentials(username: string, password: string) {
//         console.log(`Fill username and password LoginPage ${username} and ${password}`);
//     }


//     clickLogin() {
//         console.log("Click the login button");
//     }


//     //     constructor(){ // Special method that doesnt required to be invoked
//     //         console.log("I am a default constructor"+constr)        
//     //     }



//     constructor(constr: string) { // Special method that doesnt required to be invoked
//         console.log(`I am a ${constr}constructor`)
//     }


// }



// const lopobj1 = new LoginPage1("parameterized") // syntax to create an object to access the methods and properites of a class as well creating a memory to store the class


// lopobj1.launch("Chrome")
// lopobj1.loadurl("https://leaftaps.com/opentaps/control/main")
// lopobj1.fillCredentials("democsr2", "crmsfa")
// lopobj1.clickLogin()



// /*
// A constructor will automatically be invoked when an object of a class is created => line no 37


// 1. constructor was not called
// 2. Constructor method got invoked first */


// /* Learning:
// 1. Normal method , parameterized method
// 1. Default constructor , parametrized constructor *Thank you for your business! We look forward to working with you again.*/