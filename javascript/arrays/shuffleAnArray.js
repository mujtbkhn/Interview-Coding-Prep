// Solve: Given an array consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn]. Shuffle the array in form of [x1, y1, x2, y2, ... , xn, yn].

//input : [2,5,1,3,4,7]
//output : [2,3,5,4,1,7]

function shuffleArray(arr) {

    let size = Math.ceil(arr.length / 2)
    let first = arr.slice(0, size)
    let second = arr.slice(size)
    let result = []

    for (let i = 0; i < first.length; i++) {
        result.push(first[i], second[i])
    }
    return result
}
console.log(shuffleArray([2, 5, 1, 3, 4, 7]))