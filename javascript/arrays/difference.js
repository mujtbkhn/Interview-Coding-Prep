function diff(arr1, arr2) {
    // Problem: Find the difference between two arrays, returning unique elements that are in either array but not in both.
    // Example input: arr1 = [1, 5, 6, 8, 7], arr2 = [5, 2, 3, 8, 9]
    // Example output: [1, 6, 7, 2, 3, 9]

    // Logic goes here
    let diff1 = arr1.filter(item => !arr2.includes(item))
    let diff2 = arr2.filter(item => !arr1.includes(item))
    return [...diff1, ...diff2]
}

// Example usage
// const arr1 = [1, 5, 6, 8, 7];
// const arr2 = [5, 2, 3, 8, 9];
// console.log(diff(arr1, arr2)); // Expected output: [1, 6, 7, 2, 3, 9]


// Another approach to solve the same problem
function findDiff(arr1, arr2) {
    // Problem: Find the difference between the first array and the second array, returning elements unique to the first array.
    // Example input: arr1 = [1, 2, 3, 5], arr2 = [2, 8, 9, 4]
    // Example output: [1, 3, 5]

    // Logic goes here
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    let unique1 = [...set1].filter(item => !set2.has(item))
    let unique2 = [...set2].filter(item => !set1.has(item))

    return [...unique1, ...unique2]
}

// Example usage
// console.log(findDiff([1, 2, 3, 5], [2, 8, 9, 4])); // Expected output: [1, 3, 5]
