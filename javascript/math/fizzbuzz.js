// Requirement: Write a function to print numbers from 1 to 100, but replace multiples of 3 with "fizz", multiples of 5 with "buzz", and multiples of both 3 and 5 with "fizzbuzz".
// Output: 
//   1
//   2
//   fizz
//   4
//   buzz
//   fizz
//   7
//   8
//   fizz
//   buzz
//   11
//   fizz
//   13
//   14
//   fizzbuzz
//   ...

function fizzbuzz() {
    // Print numbers from 1 to 100 with substitutions for multiples of 3 and/or 5
    let result = []
    let n = 1
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            result.push('FizzBuzz')
        }else if (n % 3 === 0) {
            result.push('Fizz')
        }else if (n % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(n)
        }
        n++
    }
    return result
}

// Example usage
console.log(fizzbuzz());
