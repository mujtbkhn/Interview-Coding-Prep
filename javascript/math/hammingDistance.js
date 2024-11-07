// Requirement: Write a function to calculate the Hamming distance between two strings of equal length, where Hamming distance is the number of positions at which the corresponding characters are different.
// Input: 
//   x = "hello"
//   y = "hrllw"
// Output: 
//   2

// Approach:
// 1. Convert both strings to arrays of characters.
// 2. Count the number of positions where the characters in the two arrays differ.

function hammingDistance(x, y) {
    // Calculate and return the Hamming distance between x and y
    x = x.split('')
    y = y.split('')

    return x.filter(item => !y.includes(item)).length
}

// Example usage
// console.log(hammingDistance("hello", "hrllw"));
