let fname = "madam"
let revName = ""
console.log("Word is :", fname)

for (let i = fname.length; i >= 0; i--){
    revName = revName.concat(fname.charAt(i))
}
console.log("Reversed word is :", revName)

if (revName === fname){
    console.log ("Yes, it is Palindrome")
}else {
    console.log ("No, it is not Palindrome")
}