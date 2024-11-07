// Requirement: Write a JavaScript function to rotate the elements of an array to the right by a specified number of positions.
// Input: arr = [1, 2, 4, 5, 7, 9, 6, 4], k = 5
// Output: [5, 7, 9, 6, 4, 1, 2, 4]

// Approach: 
// 1. Remove the last k elements from the array.
// 2. Insert these elements at the beginning of the array.

function rotated(arr, k) {
    let size = arr.length;
    k = k % size;
    let rotated = arr.splice(size - k, k);

    arr.unshift(...rotated);
    return arr;
}

// Example usage
console.log(rotated([1, 2, 4, 5, 7, 9, 6, 4], 5));


// Requirement: Write a JavaScript function to rotate the elements of an array to the right by a specified number of positions.
// Input: arr = [1, 2, 3, 4, 5, 6], k = 3
// Output: [4, 5, 6, 1, 2, 3]


const rotate = (arr, k) => {
    // Slice the last k elements and concatenate with the rest of the array
};

// Example usage
// console.log(rotate([1,2,3,4,5,6], 3));
