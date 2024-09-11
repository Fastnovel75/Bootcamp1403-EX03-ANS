// write your func here
function areListsEqual(list1, list2) {
  // Check if lengths are different, lists cannot be equal
  if (list1.length !== list2.length) {
    return false;
  }

  // Iterate through each element and compare
  for (let i = 0; i < list1.length; i++) {
    // Check if types match
    if (typeof list1[i] !== typeof list2[i]) {
      return false;
    }
    // Check if values are different
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  // If non of the above conditions were met, the lists are equal
  return true;
}

// Example usage:
console.log(
  "Input: ([1, 2, 34, 4], [1, 2, 34, 4]), Output: " +
    areListsEqual([1, 2, 34, 4], [1, 2, 34, 4])
); // true
console.log(
  "Input: ([1, 2, 454, 543, 23], [24, 4, 25, 4]), Output: " +
    areListsEqual([1, 2, 454, 543, 23], [24, 4, 25, 4])
); // false
console.log(
  'Input: ([1, 23, 45, 4, 5], [1, 23, "45", 4, 5]), Output: ' +
    areListsEqual([1, 23, 45, 4, 5], [1, 23, "45", 4, 5])
); // false
