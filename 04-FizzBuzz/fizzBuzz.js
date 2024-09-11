// write your func here
function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // A loop to iterate from 1 to n
    if (i % 3 === 0 && i % 5 === 0) {
      // Check if the current number is divisible by both 3 and 5 (FizzBuzz)
      console.log(" - FizzBuzz");
    } else if (i % 3 === 0) {
      // Check if the current number is divisible by 3 (Fizz)
      console.log(" - Fizz");
    } else if (i % 5 === 0) {
      // Check if the current number is divisible by 5 (Buzz)
      console.log(" - Buzz");
    } else {
      // If the current number was not divisible by 3 or 5, print the number itself
      console.log(" - " + i);
    }
  }
}

// Usage:
FizzBuzz(100); // FizzBuzz for the range of 1-100
