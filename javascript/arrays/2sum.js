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

//two sum with the values 
// pairSum 
// [1,2,3,4,5,6,7]
// output -> [[1,6], [2,5], [3,4]]

function findPairSum(arr, sum){
    let pairs = []
    let map = new Map();
    
    for(let i=0; i<arr.length; i++){
      let target = sum - arr[i]
      if(map.has(target)){
        pairs.push([target, arr[i]])
      }
      map.set(arr[i], i)
    }
    return pairs
  }
  console.log(findPairSum([1,2,3,4,5,6,7], 7))