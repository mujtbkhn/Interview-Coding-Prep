// Requirement: Sort an array without using inbuilt methods.
// Input: arr = [5, 2, 9, 1, 5, 6]
// Output: [1, 2, 5, 5, 6, 9]

// Approach: 
// 1. Use the selection sort algorithm to sort the array.
// 2. Iterate through the array to find the minimum element and swap it with the current position.

function sort(arr) {
    // Iterate through the array to find the minimum element and swap it with the current position
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr;
}

// Example usage
console.log(sort([5, 2, 9, 1, 5, 6])); // SELECTION SORT 
//Expected Output: [ 9, 6, 5, 5, 2, 1 ]

// Requirement: Sort an array without using inbuilt methods.
// Input: arr = [1, 2, 7, 9, 5, 3, 8]
// Output: [1, 2, 3, 5, 7, 8, 9]

// Approach: 
// 1. Use the bubble sort algorithm to sort the array.
// 2. Iterate through the array and repeatedly swap adjacent elements if they are in the wrong order.

const mySort = arr => {
    // Iterate through the array and repeatedly swap adjacent elements if they are in the wrong order

    return arr;
}

// Example usage
// console.log(mySort([1, 2, 7, 9, 5, 3, 8]));
