function flattenArray(arr) {
    // Problem: Flatten a deeply nested array into a single-level array.
    // Example input: [1, [[[[[[[[2, 3]]]]]]]], [4, [[[[[[5, 6]]]]]]]]
    // Example output: [1, 2, 3, 4, 5, 6]

    // Logic goes here
    let result = []
    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i])
            } else {
                result.push(arr[i])
            }
        }

    }
    flatten(arr)
    console.log(result)
    return result
}

// Example usage
flattenArray([1, [[[[[[[[2, 3]]]]]]]], [4, [[[[[[5, 6]]]]]]]]); // Expected output: [1, 2, 3, 4, 5, 6]

function isFlattened(arr) {
    // Problem: Flatten a nested array into a single-level array without using inbuilt JS methods.
    // Example input: [1, 2, 3, ["mujju", ["buttu"]]]
    // Example output: [1, 2, 3, "mujju", "buttu"]

    // Logic goes here
}

// Example usage
// console.log(isFlattened([1, 2, 3, ["mujju", ["buttu"]]])); // Expected output: [1, 2, 3, "mujju", "buttu"]
