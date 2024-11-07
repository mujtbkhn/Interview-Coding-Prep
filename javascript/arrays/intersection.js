const arr1 = [1, 5, 6, 8, 7]
const arr2 = [5, 2, 3, 8, 9]

// Function to find common elements between two arrays.
function intersection(arr1, arr2) {
    // Problem: Find common elements between two arrays.
    // Example input: arr1 = [1, 5, 6, 8, 7], arr2 = [5, 2, 3, 8, 9]
    // Example output: [5, 8]

    // By using Set
}

// Example usage
// console.log(intersection(arr1, arr2)); // Expected output: [5, 8]


// Function to find common elements between two arrays.
function intersection(arr1, arr2) {
    // Problem: Find common elements between two arrays.
    // Example input: arr1 = [1, 5, 6, 8, 7], arr2 = [5, 2, 3, 8, 9]
    // Example output: [5, 8]

    // By using includes
    let intersection1 = arr1.filter(item => arr2.includes(item))
    return intersection1
}

// Example usage
console.log(intersection([1, 5, 6, 8, 7], [5, 2, 3, 8, 9])); // Expected output: [5, 8]


// Function to find common elements between two arrays.
function intersection(arr1, arr2) {
    // Problem: Find common elements between two arrays.
    // Example input: arr1 = [1, 5, 6, 8, 7], arr2 = [5, 2, 3, 8, 9]
    // Example output: [5, 8]

    // By using reduce
}

// Example usage
// console.log(intersection(arr1, arr2)); // Expected output: [5, 8]


function intersect(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;
    while (i < n && j < m) {
        if (arr1[i] == arr2[j]) {
            arr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return arr;
}

console.log(intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000]));