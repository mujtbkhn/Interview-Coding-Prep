// move zeros to the end of the array
const array = [1, 4, 0, 5, 8, 7, 0, 5, 0, 6, 0];

//taking new and modifying the original
// O(n)
function moveZeros(arr) {
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1); // Remove the zero
      zeros.push(0); // Add zero to the 'zeros' array
      i--; // Adjust index after removal
    }
  }
  return [...arr, ...zeros]; // Concatenate non-zero elements with zeros
}

console.log(moveZeros(array)); // [1,4,5,8,7,5,6,0,0,0,0]

// O(n2)
function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 0 && arr[j] > 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap non-zero with zero
      }
    }
  }
  return arr;
}

console.log(moveZeros(array)); // [1,4,5,8,7,5,6,0,0,0,0]

// O(n)
function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i]
    }
  }
  while (index < arr.length) {
    arr[index++] = 0
  }

  return arr
}

console.log(moveZeros(array))