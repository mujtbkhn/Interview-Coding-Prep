// a number is a armstrong number (or narcissistic number) if addition of all of its numbers cubes is same as the number
function armStrong(n) {
    let result = []
    let sum = 0
    let digits = n.toString().split('')
    for (let char of digits) {
        result.push(+char * +char * +char)
    }
    for (let char of result) {
        sum += char
    }
    return sum === n
}
console.log(armStrong(370))
