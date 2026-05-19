// Substrings - always cut and print the cutted part of the string.
// Ignores the end index and instead prints end index - 1

let title = "Playwright"
let value = title.substring(1,3) // la is printed since l is at the 1st index and a is printed since a is at the 2nd index.
console.log(value)
let value3 = title.substring(3,1) // la is printed eventhough the indexes are swapped.
console.log(value3)
let value1 = title.substring(5,3) // yw is printed since y and w are at the 3rd and 4th of the index.
console.log(value1)
let value2 = title.substring(-1,-3) // space is printed since substrings do not allow negative indexes.
console.log(value2)