var majorityElement = function (nums) {
    // Problem: Find the majority element in an array, which is the element that appears more than ⌊n / 2⌋ times.
    // Example input: nums = [3, 2, 3]
    // Example output: 3
    let map = {}
    let size = Math.floor(nums.length / 2);
    for (let char of nums) {
        map[char] = (map[char] || 0) + 1;
        if (map[char] > size) {
            return char
        }
    }
};

console.log(majorityElement([3, 2, 3])); // Expected output: 3
