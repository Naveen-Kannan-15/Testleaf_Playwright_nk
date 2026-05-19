// Map Array is used to modify the array from within like Add, divide, subtract, multiply

let numArray = [5,6,7,8]
let numArray2 = numArray.map((x) => x*x ) // Squares the array and prints it out
console.log(numArray2)