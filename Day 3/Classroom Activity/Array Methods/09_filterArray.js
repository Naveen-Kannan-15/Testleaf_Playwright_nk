// Filter Array can be used to filter out the necessary elements in the array by passing a condition within the function

let array = [10,9,8,7,6]
let arrayEven = array.filter( (x) => x%2 === 0) // Even numbers within the array is filtered out
console.log(arrayEven)
let arrayOdd = array.filter ( (x) => x%2 !==0)
console.log(arrayOdd) // Odd numbers within the array is is filtered out