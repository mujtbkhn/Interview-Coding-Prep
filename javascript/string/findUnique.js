function findUnique(str) {
    let set = new Set()

    for (let char of str) {
        if (set.has(char)) {
            return false
        } else {
            set.add(char)
        }
    }
    return true
}

// Example usage
console.log(findUnique('Mujtbkhn')); // Expected output: true or false based on the input
