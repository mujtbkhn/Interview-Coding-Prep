// Requirement: Write a function to check if a given year is a leap year.
// Input: 
//   n = 2020
// Output: 
//   1 if the year is a leap year, otherwise 0


const isLP = n => {
    // Determine if the given year n is a leap year
    if (n % 400 === 0 || (n % 100 !== 0 && n % 4 === 0)) {
        return true
    }
    else return false
}

// Example usage
// console.log(isLP(2020));