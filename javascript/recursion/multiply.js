//without recursion 
var multiply = function (arr) {

    let product = 1
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    return product
}
// console.log(multiply([1, 2, 4, 5, 7, 8]))

//with recursion
var multiply = function (arr) {
    if (arr.length <= 0) return 1

    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
}
// console.log(multiply([1, 5, 4, 6, 2]))

//without recursion
var multiply = function (n1, n2) {
    return n1 * n2
}
// console.log(multiply(5, 4))

//with recursion
var multiply = function (n1, n2) {
    if (n2 === 0) return 0

    return n1 * multiply(n1, n2 - 1)
}
// console.log(multiply(5, 4))

var multiply = function (n1, n2) {
    let product = 0;
    while (n2 > 0) {
        product += n1
        n2--
    }
    return product
}
console.log(multiply(5, 4))