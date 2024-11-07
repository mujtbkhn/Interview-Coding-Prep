// Function to determine if one string can be formed from another
function canBeFormed(str1, str2) {
    const map1 = {}
    const map2 = {}
    for (let char of str1) {
        map1[char] = (map1[char] || 0) + 1;
    }

    for (let char of str2) {
        map2[char] = (map2[char] || 0) + 1;
    }
    // console.log(map1)
    // console.log(map2)
    for (let key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }
    return true
}

// Example usage
console.log(canBeFormed("aaz", "pszfdaa")); // Expected output: true
