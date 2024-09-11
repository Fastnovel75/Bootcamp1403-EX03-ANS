// write your func here
function FindMax(arr) {
  // Finding the maximum number in the array - using the Math module
  return Math.max(...arr);
}
function FindMax_ifs(arr) {
  // Finding the maximum number in the array - ifs (Implementation-from-scratch)
  let max = arr[0]; // Make a variable to store the maximum number
  for (let i = 1; i < arr.length; i++) {
    // Iterating over the array
    if (arr[i] > max) {
      // If the current element is greater than the current maximum
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
console.log("=====================================\nSimple:");
console.log(FindMax([434, 1, 2, 3, 4, 5, 8, 10, 128, 4, 5, 66536, 2])); // Outputs: 66536
console.log(
  "=====================================\nImplementation from scratch:"
);
console.log(FindMax_ifs([434, 1, 2, 3, 4, 5, 8, 10, 128, 4, 5, 66536, 2])); // Outputs: 66536
