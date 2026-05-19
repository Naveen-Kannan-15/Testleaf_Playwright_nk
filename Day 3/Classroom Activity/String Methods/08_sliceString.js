// String Slice used to find the extension of a file
// Ignores the end index and instead prints end index - 1

let fileName = "Needforspeed.exe"
console.log(fileName.slice(-3)) // exe is printed since it prints the characters from -1 to -3.
console.log(fileName.slice(-3,-1)) // ex is printed since e and x are present in the index -1 and -2.
console.log(fileName.slice(-1,-3)) // space is printed since slice method does not allow swapping.

let extension = ""
let dotIndex = fileName.indexOf(".")
console.log(dotIndex)
for (let i = dotIndex+1; i < fileName.length; i++){
    extension += fileName[i]
}
console.log(extension)