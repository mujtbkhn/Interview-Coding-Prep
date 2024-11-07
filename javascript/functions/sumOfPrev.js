const sumOfPrev = () => {
    let prev = 0;
    return (curr) => {
        prev += curr
        return prev
    }
}
let sum = sumOfPrev()
console.log(sum(1))
console.log(sum(6))
console.log(sum(15))
console.log(sum(8))
console.log(sum(5))