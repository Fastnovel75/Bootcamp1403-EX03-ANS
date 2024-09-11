// write your func here
function findLargestWord(str) {
  // Split the string into words with whitespace as the delimiter (Using Regex)cls
  const words = str.split(/\s+/);

  // Make variables to store the longest word and the length of it
  let longestWord = "";
  let maxLength = 0;

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Check if the current word is longer than the current longest word found
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }

  return longestWord;
}

// Example usage:
Test_str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
console.log("Input: " + Test_str + ", Output: " + findLargestWord(Test_str)); // consectetur
