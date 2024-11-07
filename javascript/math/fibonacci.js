// Requirement: Write a function to compute the nth Fibonacci number.
// Input: 
//   n = 15
// Output: 
//   610

// Approach 1: Using Recursion

function fibonacci(n) {
    // Return the nth Fibonacci number
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Requirement: Write a function to compute the first ten Fibonacci numbers.
// Output: 
//   [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function tenFib() {
    // Return the first ten Fibonacci numbers
    let result = [0, 1];
    while (result.length < 10) {
        let nextFib = result[result.length - 1] + result[result.length - 2]
        result.push(nextFib)
    }
    return result
}

// Example usage
// console.log(fibonacci(15));
console.log(tenFib());
