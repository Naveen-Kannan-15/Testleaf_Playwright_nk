"use strict";
// Type Alias for Data Types (|) with Union type
console.log("Type Alias for Data Types (|) with Union type");
let fname = "Naveen";
let phoneNumber = 9843553470;
let emailID = "nkwilmanage@gmail.com";
console.log("The Phone number of " + fname + " is " + phoneNumber + " and the email ID is " + emailID);
// Type Alias for Values with Union type
console.log("Type Alias for Values with Union type");
function onChannel(channelName) {
    console.log("The Channel Name passed is :", channelName);
}
onChannel("Sun TV");
onChannel("Cartoon Network");
onChannel("Vijay TV");
// Type Alias for Values with Intersection Type (&)
console.log("Type Alias for Values with Intersection Type (&)");
let userProfile = {
    adminName: "Naveen",
    priveleges: ["Delayed Presence"],
    name: "Kannan",
    date: "31.12.2000",
    empId: 1813
};
console.log(userProfile.adminName, userProfile.date, userProfile.priveleges, userProfile.empId, userProfile.name);
// Classroom activity on union type :
//  ------------------------------------
// --> Create a function that accepts only specific payment methods.
// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
// - Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.
// - Call the function with "UPI" and "CreditCard" as arguments.
