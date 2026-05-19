// Escape Sequence

let test = 'It is a game'
console.log(test)

let test1 = 'It\'s a game' // A backward slash before the single quote conveys the complier that the quote is also a string but not a syntax
console.log(test1)

let test2 = "It is a \n game" // A \n within a string represents a new line to be added in between the words
console.log(test2)

let test3 = "It is a \t game" // A \t within a string represents a tab of space to be added in between the words
console.log(test3)

let test4 = "It is a \"Game\"" // A \" \" between any word within a string conveys the complier that it is a part of the string but not a syntax of js
console.log(test4)