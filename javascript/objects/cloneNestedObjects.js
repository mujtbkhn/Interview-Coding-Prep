// Requirement: Clone nested objects into an array of key-value pairs.
// Input: 
//   obj = { a: 1, b: 56, c: { d: 51 } }
// Output: 
//   Array representation of the object with nested structures cloned

const cloneNestedObjects = obj => {
    // Clone the nested objects into an array of key-value pairs

    return Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object") {
            return [key, cloneNestedObjects(value)]
        } else {
            return [key, value]
        }
    })
}

// Example usage
let obj1 = { a: 1, b: 56, c: { d: 51 } };
let result = cloneNestedObjects(obj1);
console.log(JSON.stringify(result))
// Use JSON.stringify for full nested structure
// console.log(JSON.stringify(result));
