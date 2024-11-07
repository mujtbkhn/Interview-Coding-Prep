// Requirement: Write a function to find the union of two arrays, which includes all unique elements from both arrays.
// Input: 
//   arr1 = [1, 5, 6, 8, 7]
//   arr2 = [5, 2, 3, 8, 9]
// Output: 
//   [1, 5, 6, 8, 7, 2, 3, 9]

// Approach 1: Using Set

function union(arr1, arr2) {
    // Combine both arrays and remove duplicates using `Set`
    return [...new Set(arr1.concat(arr2))];
}

// Approach 2: Using Reduce

const unionUsingReduce = arr1.concat(arr2).reduce((acc, curr) => {
    // Logic to filter out duplicates and accumulate results
}, []);

// Approach 3: Using ForEach 

const unionUsingForEach = (arr1, arr2) => {
    let seen = {};
    let result = [];
    return arr1.concat(arr2).forEach(item => {
        // Logic to filter out duplicates using an object
        if (!seen[item]) {
            result.push(item)
        }
    });
    // return result;
}

// Example usage
// console.log(union(arr1, arr2));
// console.log(unionUsingReduce);
console.log(unionUsingForEach([1, 5, 6, 8, 7], [5, 2, 3, 8, 9]));
