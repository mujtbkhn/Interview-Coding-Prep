function maxOcc(arr) {
    // Problem: Find the maximum occurring string in an array.
    // Example input: arr = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple']
    // Example output: 'apple'
    let map = {}
    arr.forEach(element => {
        map[element] = (map[element] || 0) + 1;
    });
    let maxCount = 0
    let maxString = '';
    for (let key in map) {
        if (map[key] > maxCount) {
            maxCount = map[key];
            maxString = key
        }
    }
    return maxString;

}

console.log(maxOcc(['apple', 'banana', 'orange', 'apple', 'orange', 'orange']))