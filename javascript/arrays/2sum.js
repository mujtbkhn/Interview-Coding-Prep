function twoSum(nums, target) {
    // Problem: Find indices of the two numbers in the array that add up to the target.
    // Example input: nums = [2, 5, 6, 7], target = 9
    // Example output: [0, 2] because nums[0] + nums[2] = 2 + 7 = 9

    // Logic to find indices of two numbers that sum up to the target goes here
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 5, 6, 7], 9)); // Expected output: [0, 3]


/*
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i=0; i<nums.length; i++){
        const pairTarget = target - nums[i]
        if(map.has(pairTarget)){
            return [i, map.get(pairTarget)]
        }
        map.set(nums[i], i)
    }
};
*/