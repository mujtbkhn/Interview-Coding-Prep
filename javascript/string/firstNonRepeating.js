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
// console.log(nonRepeating("aabbddcce")); // Expected output: the first non-repeating character or -1 if all repeat

//better approach

function firstNonRepeating(str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], -1)
        } else {
            map.set(str[i], i)
        }
    }
    for (let [char, index] of map) {
        if (index !== -1) {
            return index
        }
    }
    return -1
}
// console.log(firstNonRepeating("lovelocode"))