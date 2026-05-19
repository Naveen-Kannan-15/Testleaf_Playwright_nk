// String Operations 

console.log("----------------")

const inputString = "Hello World"
const arrayString = inputString.split(" ")
let lastWord = arrayString.pop()
console.log("The Last Word is " + lastWord + " and it\'s length is " + lastWord.length + " characters")


console.log("----------------")

const inputString2 = "  fly to   the moon  "
const arrayString2 = inputString2.trim()
const a = arrayString2.split(" ")
let lastWord2 = a.pop()
console.log("The Last Word is " + lastWord2 + " and it\'s length is " + lastWord2.length + " characters")

console.log("----------------")

function isAnagram(s1, s2){
    const string1 = s1.trimStart().toLowerCase()
    const sortedStr1 = string1.split("").sort().join("").trim()
    const string2 = s2.trimStart().toLowerCase()
    const sortedStr2 = string2.split("").sort().join("").trim()
    if(sortedStr1 === sortedStr2){
        console.log("The given words are Anagrams")
    }else{
        console.log("The given words are not Anagrams")
    }
}
isAnagram("  HELLO  ", " ell ho ")
isAnagram("lisTe n", "SilE nt")
isAnagram("Hell o", "Wo RLD")

console.log("----------------")