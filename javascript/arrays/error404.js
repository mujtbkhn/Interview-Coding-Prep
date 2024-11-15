//error404
//the array should either have a 0 followed by another 0 or it should have a 4 followed by another 4 but not the two should happen in same array

// function error404(arr){
//   let zero = 0;
//   let four = 0
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] === 0 && arr[i + 1] === 0){
//       zero = 1
//     }
//     if(arr[i] === 4 && arr[i + 1] === 4){
//       four = 1
//     }
//   }
//   return zero !== four
// }
// console.log(error404([4,0,0,4,3,1]))

function error404(arr) {
    let zero = false;
    let four = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && arr[i + 1] === 0) {
            if (four) return false
            zero = true
        }

        if (arr[i] === 4 && arr[i + 1] === 4) {
            if (zero) return false
            four = true
        }
    }

    return zero || four
}
console.log(error404([4, 0, 4, 3, 1]))
