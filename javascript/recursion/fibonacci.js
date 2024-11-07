//fibonacci is the sum of previous two numbers
// fibonacci of 5 => 0 1 1 2 3 5

//without recursion
var fibonacci = function (x) {
    let res = [0, 1]
    for (let i = 2; i <= x; i++) {
        res.push(res[res.length - 1] + res[res.length - 2])
    }
    return res[x]
}
// console.log(fibonacci(15))

//with recursion
var fibonacci = function (x) {
    if (x <= 1) return x;
    return fibonacci(x - 1) + fibonacci(x - 2)
}
// console.log(fibonacci(15))