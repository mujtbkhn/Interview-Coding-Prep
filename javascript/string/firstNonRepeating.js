function nonRepeating(str) {
     return str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char))
     
    // let map = {}
    // for (let char of str) {
    //     map[char] = (map[char] || 0) + 1;
    // }
    // for(let key in map){
    //     if(map[key] === 1){
    //         return key
    //     }
    // }
}

// Example usage
console.log(nonRepeating("aabbddcce")); // Expected output: the first non-repeating character or -1 if all repeat
