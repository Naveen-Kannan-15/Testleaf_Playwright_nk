// Sort Array is used to sort the arrays either in the descending or in the ascending order
// Sort() is not applicable for the numbers unless an arrow function is used

let numArray = [1, 10, 2, 4, 3, 0]
numArray.sort()
console.log(numArray) // [ 0, 1, 10, 2, 3, 4 ] is printed since the arrow function is not used

numArray.sort((a,b)=> (a-b))
console.log(numArray) // [ 0, 1, 2, 3, 4, 10 ] is printed in ascending since the arrow function is used with a - b

numArray.sort((a,b)=> (b-a))
console.log(numArray) // [ 10, 4, 3, 2, 1, 0 ] is printed in descending since the arrow function is used with b - a