function maxSubArray(arr) {
    // Problem: Find the maximum sum of a contiguous subarray and the subarray itself.
    // Example input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    // Example output: { maxSum: 6, maxArray: [4, -1, 2, 1] }
    let maxSum = arr[0]
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0
        for (let j = i; j < arr.length; j++) {
            currentSum = currentSum + arr[j]
            if (currentSum > maxSum) {
                maxSum = currentSum;
                start = i;
                end = j
            }
        }
    }
    return { "sum": maxSum, "maxSum": arr.slice(start, end + 1) }
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// kadane's algorithm

function maxSumSubArray(arr) {
    let max = arr[0];
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}
console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))