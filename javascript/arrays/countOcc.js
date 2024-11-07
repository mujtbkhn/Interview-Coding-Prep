function countEachElementOcc(arr) {
    // Problem: Count the number of occurrences of each element in an array and return the result as an object.
    // Example input: ['a', 'b', 'a', 'c', 'd', 'b', 'a']
    // Example output: { a: 3, b: 2, c: 1, d: 1 }
    
    // Logic goes here
    let map = {}
    arr.forEach(item => {
        map[item] = (map[item] || 0) + 1;
    })
    console.log(map)
    return map

}

// Example usage
// countEachElementOcc(['a', 'b', 'a', 'c', 'd', 'b', 'a']); // Expected output: { a: 3, b: 2, c: 1, d: 1 }
// countEachElementOcc([1, 2, 3, 4, 56, 1, 23, 5, 6, 5, 2, 3, 14, 5, 6]); // Expected output: { 1: 2, 2: 2, 3: 2, 4: 1, 5: 3, 6: 2, 14: 1, 23: 1, 56: 1 }


// Another approach to solve the same problem
// const countOcc = arr 
    // Problem: Count the occurrences of each element in an array and return the result as an object using Array.prototype.reduce.
    // Example input: [1, 2, 45, 7, 8, 9, 1, 5, 5, 74, 8]
    // Example output: { 1: 2, 2: 1, 45: 1, 7: 1, 8: 2, 9: 1, 5: 2, 74: 1 }
    
    // Logic goes here

// Example usage
// console.log(countOcc([1, 2, 45, 7, 8, 9, 1, 5, 5, 74, 8])); // Expected output: { 1: 2, 2: 1, 45: 1, 7: 1, 8: 2, 9: 1, 5: 2, 74: 1 }
