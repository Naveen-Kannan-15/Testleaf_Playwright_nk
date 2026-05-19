// Solution from ChatGPT

function checkPalindrome(str) {
  // Reverse the string using split()
  const reversed = str.split("").reverse().join("");

  console.log("Reversed:", reversed);

  // Check palindrome
  if (str === reversed) {
    console.log("It is a palindrome");
  } else {
    console.log("Not a palindrome");
  }
}

// Test
checkPalindrome("madam");
checkPalindrome("hello");