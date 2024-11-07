const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

function compareArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(compareArray(array1, array2)); // true
