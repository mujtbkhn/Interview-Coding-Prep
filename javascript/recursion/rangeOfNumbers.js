// create an array with range of numbers
// start = 1, end = 5  => [1,2,3,4,5]

function rangeOfNumbers(start, end) {
    if (end < start) return []
    const num = rangeOfNumbers(start, end - 1);
    num.push(end)
    return num
}
// console.log(rangeOfNumbers(0, 5))

