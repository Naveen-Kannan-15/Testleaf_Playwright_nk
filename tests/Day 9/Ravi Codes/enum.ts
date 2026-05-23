// //Object Literal

// // let TestResults ={

// //     "Pass" : "PASSED",
// //     "Fail" : "FAILED",
// //     "Skip" : "SKIPPED"

// // }

// // console.log(TestResults.Pass);



// //ENUM  == const(final) 

// //STRING ENUM

// enum urls {
//     "dev" = "http://dev.com",
//     "prod" = "http://prod.com",
//     "uat" = "http://uat.com"
// }

// function loadApplication(testEnv: urls) {
//     console.log(`The execution result is ${testEnv}`);
// }
// loadApplication(urls.dev)

// //HETEROGENOUS ENUM

// enum testResults {
//     "Pass" = 0,
//     "Fail"="FAILED",
//     "Skip"=2,
//     "Warning"
// }

// function logTestResults(results: testResults) {
//     console.log(`The execution result is ${results}`);
// }
// logTestResults(testResults.Skip)