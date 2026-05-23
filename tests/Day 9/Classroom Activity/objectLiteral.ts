// Implicit Inference of Object Members
console.log("Implicit Inference of Object Members")

let userInfo = {
    firstName : "Naveen",
    lastName : "Kannan",
    phoneNumber : 9843553470,
    emailID : "naveenkannan1501@gmail.com"
}

console.log("The Full name of the candidate is : " + userInfo.firstName + " " + userInfo.lastName)
console.log("The contact number and the Email ID is : " + userInfo.phoneNumber + " and " + userInfo.emailID)


// Explicit Inference of Object Members
console.log("Explicit Inference of Object Members")

let userInfo1 : {

    firstName : string
    lastName : string
    phoneNumber : number
    emailID : string

} = {

    firstName : "Naveen",
    lastName : "Kannan",
    phoneNumber : 9843553470,
    emailID : "naveenkannan1501@gmail.com"

}

console.log("The Full name of the candidate is : " + userInfo1.firstName + " " + userInfo1.lastName)
console.log("The contact number and the Email ID is : " + userInfo1.phoneNumber + " and " + userInfo1.emailID)

// Implicit Inference of Object Members using Special Characters in the Keys and retrieving them using [] in the call method
console.log("Implicit Inference of Object Members using Special Characters in the Keys and retrieving them using [] in the call method")

let userInfo2 = {
    "first@Name" : "Naveen",
    lastName : "Kannan",
    phoneNumber : 9843553470,
    emailID : "naveenkannan1501@gmail.com"
}

console.log("The Full name of the candidate is : " + userInfo2["first@Name"] + " " + userInfo2.lastName)
console.log("The contact number and the Email ID is : " + userInfo2.phoneNumber + " and " + userInfo2.emailID)