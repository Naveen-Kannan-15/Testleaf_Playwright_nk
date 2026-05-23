// // let username : string = "ravi@testleaf.com"
// // username = 8979870
// // username = undefined



// // let username : string | number 


// // username = "ravi@testleaf.com"


// // username = 9879798


// //Type alias for datatype


// type productDatatype = number | string | boolean //  productDatatype is an alias name for a new datatype that was created by us to hold a specific datatyoe or value


// let productNumber: productDatatype = 687686


// let productName: productDatatype = "Laptop"


// let productAvailability: productDatatype = true



// //Type alias for value :


// //Union Type | either this or that


// type supportedBrowsers = "Chrome" | "Firefox" | "msedge"


// function invokeBrowser(browserName1: supportedBrowsers, browserName2: supportedBrowsers) {


//     if (browserName1 === "Chrome") {
//         console.log("Launch the client specific Browser");
//     } else {


//         console.log("Unknown browser type");
//     }


// }


// invokeBrowser("Chrome", "Firefox")



// //Intersection TypeAlias &


// type Admin = {
//     adminName: string,
//     priveleges: string[]
// }


// type Employee = {
//     name: string,
//     date: string,
//     empId: number,
// }