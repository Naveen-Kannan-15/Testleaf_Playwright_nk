// JS Functions 

console.log("\nTask 1, using Named Function get the name and concatenate with the sentence")
function userProfile(user){
    console.log("Hello, "+ user + "!") // Traditional method using + operator
}
userProfile("Naveen")

function userProfile2(name){
    return `Hello, ${name}!` // Template Literal method
}
console.log(userProfile2("Naveen"))




console.log("\nTask 2, using Arrow Function, get a number and double it with a function")
let double = num => { return num * 2}
console.log("The Double of the given number is ",double(5))




console.log("\nTask 3, using Anonymous Function, print a message after 2 seconds")
setTimeout(()=>{console.log("This message is delayed by 2 seconds");}, 2000)




setTimeout(()=>{console.log("\nTask 4, using Call Back Function, ");}, 3000)
function getUserData(callback){
    setTimeout(()=>{
        callback()
    },3000)
}
getUserData(()=> {
    console.log("This is a Call Back Function")
})