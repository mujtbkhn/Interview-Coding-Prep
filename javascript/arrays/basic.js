// Function to calculate the Hamming distance between two strings
function hammingDistance(x, y) {
    // Convert both strings to arrays
    // Count the number of characters that differ between the two arrays
    x = x.split('');
    y = y.split('');
    return x.filter(item => !y.includes(item)).length
}

// Example usage
// console.log(hammingDistance("hello", "hrllw"))

// Function to find the maximum and minimum values in an array
function find(arr) {
    // Use Math.max and Math.min to find the maximum and minimum values
    // Return an object containing both values
    let max = arr.find((item) => arr.every(other => item >= other))
    let min = arr.find((item) => arr.every(other => item <= other))
    return { max, min }
}

// Example usage
// console.log(find([0.54, 1, 5, 4, 7, 89, 5, 42, 5]))

// Function to find the second largest value in an array
function secondLargest(arr) {
    // Remove duplicates and sort the array in descending order
    // Return the second element in the sorted array
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    return [largest, secondLargest]
}

// Example usage
// console.log(secondLargest([1, 41, 5, 2, 71, 1, 5, 6, 82, 75, 77]))

// Function to remove all occurrences of a specific value from an array
function remove(arr, value) {
    // Use filter to exclude the specified value from the array
    return arr.filter((item, i) => item !== value)
}

// Example usage
// console.log(remove([1, 5, 6, 8, 7], 6))

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    // Convert the array to a Set to remove duplicates
    // Convert the Set back to an array
    return arr.filter((item, i) => arr.indexOf(item) === i)
}

// Example usage
// console.log(removeDuplicates([1, 2, 1, 2, 12, 4, 5, 4]))

//Function to exclude duplicates from an array
function excludeDuplicates(arr) {
    let map = {};
    for (let char of arr) {
       map[char] = (map[char] || 0) + 1;
    }

    return arr.filter(num => map[num] === 1)
}

// Example usage
// console.log(excludeDuplicates([1, 2, 1, 2, 12, 4, 5, 4]))
// output [12,5]

// Function to find elements that are not present in both of two arrays
const notInBoth = (arr1, arr2) => {
    // Filter out elements in arr1 that are not in arr2
    // Filter out elements in arr2 that are not in arr1
    // Combine the results
}

// Example usage
// console.log(notInBoth([1, 5, 6, 8, 7], [5, 2, 3, 8, 9]))

// Function to find the largest number in an array
function findLargest(arr) {
    // Find the largest number by sorting or using Math.max
}

// Example usage
// console.log(findLargest([3, 5, 4, 5, 7, 2, 4, 3, 7, 2, 8]))

// Function to calculate the sum of all elements in an array
function sumArr(arr) {
    // Use reduce to calculate the sum of the array elements
}

// Example usage
// console.log(sumArr([1, 2, 4, 5, 4, 7, 8, 92, 4]))

// Function to merge two sorted arrays into a single sorted array
function merge(arr1, arr2) {
    // Combine the two arrays and remove duplicates
    // Sort the resulting array
}

// Example usage
// console.log(merge([1, 2, 6, 8], [4, 5, 6, 8, 9]))

// Function to merge two sorted arrays without using built-in sorting functions
function mergeSortedArray(arr1, arr2) {
    // Combine the two arrays
    // Sort the resulting array manually
}

// Example usage
// console.log(mergeSortedArray([1, 2, 4, 5], [4, 9, 61, 98]))

// Function to sum the digits at even indices of an array
function sumAtEven(arr) {
    // Filter the array to get elements at even indices
    // Use reduce to sum these elements
}

// Example usage
// console.log(sumAtEven([2, 5, 47, 85, 6, 4, 24, 7, 8, 38])) 

// Function to return a curried function that multiplies elements of an array by a given integer
function curriedMultiply(arr) {
    // Return a function that multiplies each element of arr by a given integer
}

// Example usage
// console.log(curriedMultiply([1, 2, 3])(2))

// Function to find the starting and ending positions of a given value in a sorted array
const startAndEnd = (arr, k) => {
    // Find the first and last index of k in the array
}

// Example usage
// console.log(startAndEnd([1, 2, 3, 4, 5, 6, 3, 5, 4, 63, 2, 1, 5], 5))

// Function to create a countdown array from a given number
const countDown = num => {
    // Create an array from num down to 1
}

// Example usage
// console.log(countDown(15))

// Function to generate an array of specified length filled with random numbers
const generateArray = len => {
    // Create an array of length len with random numbers between 0 and 99
}

// Example usage
// console.log(generateArray(5))
