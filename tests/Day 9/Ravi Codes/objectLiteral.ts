// //Object Literal :

// let userInfo1 = "Ravi"
// let userMob = 786989

// //JSON way in .ts file :

// let userInfo2 = {
//     firstName : "Ravindran",
//     lastName : "R",
//     email : "ravi@testleaf.com",
//     mob:7897987
// }

// //To access the different properties , we use dot notation :

// console.log(userInfo2.firstName);
// console.log(userInfo2.mob);

// //Explicitly infering the datatype of the members of an

// let userInfo3: {
//     firstName: string,
//     lastName: string,
//     email: string,
//     mob: number
// } = {
//     firstName: "Ravindran",
//     lastName: "R",
//     email: "ravi@testleaf.com",
//     mob: 7897987
// }

// //To access the different properties , we use dot notation :

// console.log(userInfo2.firstName);
// console.log(userInfo2.mob);

// //To access the different properties with special character , we use square bracket notation :

// let userInfo4: {
//     "first@Name": string,
//     lastName: string,
//     email: string,
//     mob: number
// } = {
//     "first@Name": "Ravindran",
//     lastName: "R",
//     email: "ravi@testleaf.com",
//     mob: 7897987
// }

// //To access the different properties , we use dot notation :

// console.log(userInfo4["first@Name"]);
// console.log(userInfo4.mob);