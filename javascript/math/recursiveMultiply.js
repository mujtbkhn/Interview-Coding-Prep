// Requirement: Write a recursive function to multiply two numbers without using the multiplication operator.
// Input: 
//   n1 = 4
//   n2 = 3
// Output: 
//   12



function multiply(n1, n2) {
    // Multiply n1 and n2 using recursion
    if (n2 === 0) return 0
    return n1 + multiply(n1, n2 - 1)
}

// Example usage
console.log(multiply(4, 3));
