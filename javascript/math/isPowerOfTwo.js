// a number is a power of Two if it is divisible by 2
// 8 is a power of 2 because 2^3 = 8

function isPowerOfTwo(n) {
    if (n < 1) return false;  // Powers of 2 are always positive
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;  // If n is not divisible by 2, it's not a power of two
        }
        n = n / 2;  // Keep dividing by 2
    }
    return true;  // If n becomes 1, it means it's a power of two
}

console.log(isPowerOfTwo(5));  // false
console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(0));  // false
console.log(isPowerOfTwo(2));  // true
console.log(isPowerOfTwo(4));  // true
