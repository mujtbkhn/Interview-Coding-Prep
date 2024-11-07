// given an integer x return true if it is a palindrome number recursively
// x = 121 => true
// x = 10 => false

function palindrome(x) {
    x = x.toString()
    let start = x[0]
    let end = x[x.length - 1]

    if (x.length <= 1) return true
    if (start !== end) {
        return false
    }

    return palindrome(x.slice(1, -1))
}
console.log(palindrome("racecar"))
console.log(palindrome(121)) 