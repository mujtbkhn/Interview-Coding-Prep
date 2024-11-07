function chunk(arr, size) {
    // Problem: Split an array into chunks of a specified size.
    // Example input: arr = [1, 2, 4, 8, 5, 6, 9], size = 6
    // Example output: [[1, 2, 4, 8, 5, 6], [9]]

    // Logic to split the array into chunks of the specified size goes here
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result;
}

// console.log(chunk([1, 2, 4, 8, 5, 6, 9], 6)); // Expected output: [[1, 2, 4, 8, 5, 6], [9]]


// Another approach to solve the same problem
const splitInChunks = (arr, k) => (
    Array.from({ length: Math.ceil(arr.length / k) }, (_, i) => {
        return arr.slice(i * k, i * k + k)
    })
)
// Problem: Split an array into chunks of a specified size using Array.from.
// Example input: arr = [1, 2, 4, 5, 9, 6, 8, 7], k = 2
// Example output: [[1, 2], [4, 5], [9, 6], [8, 7]]

// Logic using Array.from to split the array into chunks of the specified size goes here


// console.log(splitInChunks([1, 2, 4, 5, 9, 6, 8, 7], 2)); // Expected output: [[1, 2], [4, 5], [9, 6], [8, 7]]
