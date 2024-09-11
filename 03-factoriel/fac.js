// write your func here
function factorial(n) {
  // Check if the input is a non-negative integer
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  // Calculate the factorial using a loop
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log("Input: 0, Output: " + factorial(0)); // 1
console.log("Input: 1, Output: " + factorial(1)); // 1
console.log("Input: 3, Output: " + factorial(3)); // 6
console.log("Input: 12, Output: " + factorial(12)); // 479001600
