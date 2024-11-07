// Print number of distinct substrings in a given string.
// Input: "abab"
// Output: 7 (a, ab, aba, abab, b, ba, bab)


function countDistinctSubstrings(str) {
    let set = new Set();
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            set.add(str.substring(i, j));
        }
    }
    
    return set.size;
}

console.log(countDistinctSubstrings("abab"));  // Output: 7