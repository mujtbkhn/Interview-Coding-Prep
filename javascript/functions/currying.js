// create a curry function that accepts 5 arguments

const getSum = (nums) => {
    let sum = 0;
    for (let num of nums) sum += num
    return sum
}

const sum = (...args) => {
    if (args.length === 5) {
        return getSum(args)
    } else {
        return (...args2) => sum(...args, ...args2)
    }
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4)(5))
console.log(sum(1)(2)(3)(4)(5))
console.log(sum(1, 2, 3)(4, 5))
console.log(sum(1, 2)(3, 4, 5))
console.log(sum(1)(2, 3, 4, 5))