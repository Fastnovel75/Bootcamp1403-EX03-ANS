// write your func here
function reverseString(input) {
    return input.split('').reverse().join('');
}
function reverseString_loopbased(input) {
    let result = ''; // make a variable to store the reversed string
    for (let i = input.length - 1; i >= 0; i--) { /* make a loop to iterate over the input string backwards
        and add each character to the result string */
        result += input[i];
    }
    return result;
}


// Example usage: (Simple)
console.log("=====================================\nSimple:")
console.log(reverseString("Hello World")); // Outputs: "dlroW olleH"
console.log(reverseString("JavaScript")); // Outputs: "tpircsVAJ"
// Example usage: (Implementation from scratch)
console.log("=====================================\nImplementation from scratch:")
console.log(reverseString_loopbased("Hello World")); // Outputs: "dlroW olleH"
console.log(reverseString_loopbased("JavaScript")); // Outputs: "tpircsVAJ"