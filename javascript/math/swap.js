// Requirement: Write a function to swap the values of two variables without using a temporary variable.
// Input: 
//   a = 1
//   b = 45
// Output: 
//   45 1


function swap(a, b) {
    // Swap the values of a and b without using a temporary variable
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b]
}

// Example usage
// console.log(swap(1, 45));

// Alternative one-liner approach:
const oneLineSwap = (a, b) => [b, a];
// console.log(oneLineSwap(8, 5))

const withTemp = (a, b) => {
    let temp = a;
    a = b;
    b = temp
    return [a, b]
}
console.log(withTemp(65, 24))