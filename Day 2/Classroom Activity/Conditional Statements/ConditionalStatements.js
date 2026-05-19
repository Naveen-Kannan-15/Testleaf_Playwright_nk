// Example 1:
let x = 10

if(x===11){
    console.log(x)
}else if(x===10){
    console.log(x)
}else{

}
console.log("----------------")
// Example 2:

let browser = "Edge"

if(browser === "Edge"){
    console.log("The Browser is", browser)
}
else if(browser === "Firefox"){
    console.log("The Browser is", browser)
}
else{
    console.log("The Browser is", browser)
}

console.log("----------------")

// Example 3: with Function

function BrowserName(browser){
// let browser = "Edge" // this is hardcoding

if(browser === "Edge"){
    console.log("The Browser is", browser)
}
else if(browser === "Firefox"){
    console.log("The Browser is", browser)
}
else{
    console.log("The Browser is", browser)
}
}   

BrowserName("Firefox") // This is passing the value via function as Argument


console.log("----------------")