// Requirement: Write a program to print all numbers of a list in a random manner and ensure all numbers are unique, without using any pre-defined functions.
// Input: a = [1, 2, 5, 3, 4, 6, 7, 8, 8, 8, 8, 9, 9, 9];
// Output: a = [2, 4, 9, 7, 1, 3, 6, 5, 8]; (Order may vary)

// Approach: 
// 1. Create an array of unique values from the input array.
// 2. Shuffle the unique values array randomly and return it.

function printLRandom(arr) {
    // Create an array to hold unique values

    // Iterate through the input array to filter out unique values

    // Shuffle the unique values array randomly
    let unique = [...new Set(arr)]
    let j;
    for (let i = 0; i < unique.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        [unique[i], unique[j]] = [unique[j], unique[i]];

    }
    return unique
}

// Example usage
console.log(printLRandom([1, 2, 5, 3, 4, 6, 7, 8, 8, 8, 8, 9, 9, 9]));
