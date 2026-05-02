let word = "civic"
let revWord = ""
for (let i = word.length - 1; i >= 0; i--){
    revWord += word[i]
}
console.log(revWord)

function isPalin(){
    if (word === revWord){
        console.log("The given word is a palindrome")
    }else {
        console.log("The given word is not a palindrome")
    }
}
isPalin()