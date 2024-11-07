// Function to count the number of occurrences of each character in a string
function count(str) {
    let map = {}
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    return Object.entries(map)
}

// Example usage
// console.log(count('madam')); // Expected output: [['m', 2], ['a', 2], ['d', 2]]

// Function to count the occurrences of each word in a sentence
const countOcc = sentence => 
    sentence.split(' ').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {})
// Split the sentence into words and reduce to count occurrences

// Example usage
const s = 'the quick brown fox jumps over the lazy dog jumps over the fence';
console.log(countOcc(s)); // Expected output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 2, over: 2, lazy: 1, dog: 1, fence: 1 }

  /*
  Print number of occurrences of a specific character in a string.
  Input: "mississippi", 's'
  Output: 4
  */
  function noOfocc(str, k){
    let count = 0;
    for (let char of str){
      if(k.includes(char.toLowerCase())){
        count++
      }
    }
    return count
}
// console.log(noOfocc("mississippi", "s"))