//Search in a rotated sorted array
//Leetcode 33
var search = function (nums, target) {
    //linear search
    // if(nums.indexOf(target) !== -1){
    //     return nums.indexOf(target)
    // }else return -1

    //binary search
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};

console.log(search([5, 6, 7, 8, 9, 0, 1, 3, 4], 0))