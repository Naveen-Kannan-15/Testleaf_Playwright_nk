// Get Browser Name using named function

const browserName = "Chrome"
let browserName1 = "Edge"  

function getBrowserName(browserName){


    if (browserName === "Chrome"){
         console.log(browserName + browserName) 
    }else{
        console.log(browserName)
        let browserName1 = "edge"      
   }

   console.log(browserName1)
   
}
getBrowserName("chrome")