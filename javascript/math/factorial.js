// Requirement: Write a function to calculate the factorial of a given non-negative integer.
// Input: 
//   n = 5
// Output: 
//   120


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * factorial(n - 1);
}

// Approach 2: Using Arrow Function and Conditional Operator
const fact = (n) => (
    n <= 1 ? 1 :  n * fact(n - 1)
)
// Example usage
// console.log(factorial(5));
// console.log(fact(5))