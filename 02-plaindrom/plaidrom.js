// write your func here
function reverseString(input) {
  let result = ""; // make a variable to store the reversed string
  for (let i = input.length - 1; i >= 0; i--) {
    /* make a loop to iterate over the input string backwards
        and add each character to the result string */
    result += input[i];
  }
  return result;
}
function isPalindrome(str, clean_str = false) {
  // Optional clean the input string
  if (clean_str) {
    str = str.replace(/\s+/g, "").toLowerCase();
  }
  // Check if the input string is a palindrome
  return str === reverseString(str);
}

// Example usage:
console.log("Input: racecar, Output: " + isPalindrome("racecar")); // true
console.log("Input: hello, Output: " + isPalindrome("hello")); // false
