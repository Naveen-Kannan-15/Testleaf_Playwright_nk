// Scoping using If Statements and Function with LET and VAR and CONST

// let genderType = "Female"

// function printGender(){
//     let colour = "Brown"
//     if (genderType === "Female"){
//         var age = 30
//         let colour = "Pink"
//         console.log(colour) // Pink colour is printed even though the colour is set to brown outside the block scope because Let is block scoped
//     }
//     console.log(age) // 30 is printed even though age is declared within the if block scope, yet var is not block scoped
// }
// printGender()
// console.log(genderType)  // Female is printed

console.log("-----------------------")

// var genderType = "Female"

// function printGender(){
//     var colour = "Brown"
//     if (genderType === "Female"){
//         let age = 30
//         var colour = "Pink" 
//         console.log(colour) // Pink is printed here since it is declared locally, yet var allows redeclaration with the same variable
//     }
//     console.log(age) // Age is not printed here since it is declared inside the if block and let is block scoped, system throws an error with Age is not defined
// }
// printGender()
// console.log(genderType) // Female is printed

console.log("-----------------------")

let genderType = "Female"

function printGender(){
    var age = 40
    let colour = "Brown"
    if (genderType === "Female"){
        var age = 30
        let colour = "Pink"
        console.log(colour) // Pink is printed since it is declared locally
        console.log(age) // 30 is printed since the age is declared locally
    }
    console.log(colour) // Brown is printed since the colour brown is declared outside the if block, pink is not printed since it is declared with the keyword let within the if block with restricts it to flow outside the if block
    console.log(age) // 30 is again printed since the age is reclared from 40 to 30 again inside the if block
}
printGender()
console.log(genderType) // Female is printeds