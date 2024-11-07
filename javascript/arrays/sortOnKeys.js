// Requirement: Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// Input: 
//   arr = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Jim", age: 35 }
//   ]
//   key = 'age'
// Output: 
//   [
//     { name: "Jane", age: 25 },
//     { name: "John", age: 30 },
//     { name: "Jim", age: 35 }
//   ]


function sortedBasedOnKeys(arr, key) {
    // Sort the array based on the values of the specified key in ascending order
    return arr.sort((a, b) => a[key] - b[key])

}

// Example usage
const arr = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
]
const sortedByAge = sortedBasedOnKeys(arr, 'age');
console.log(sortedByAge);
