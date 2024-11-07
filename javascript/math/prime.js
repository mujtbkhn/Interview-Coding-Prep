// Requirement: Write a function to check if a given number is a prime number.
// Input: 
//   n = 27
// Output: 
//   false


function findPrime(n) {
    // Check if n is a prime number
    if (n <= 1) return false
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i !== 0) {
            return true
        }
        else return false
    }
}

// Requirement: Write a function to generate the first 50 prime numbers.
// Output: 
//   An array containing the first 50 prime numbers



function fiftyPrimes() {
    // Generate the first 50 prime numbers
    let result = []
    let num = 2
    while (result.length < 50) {
        if (isPrime(num)) {
            result.push(num)
        }
        num++
    }

    return result
}

// Helper function to determine if a number is prime
function isPrime(n) {
    // Check if n is a prime number
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// Example usage
// console.log(findPrime(19));
console.log(fiftyPrimes());
