// Function to check if one string is a rotation of another
function areRotations(str1, str2) {
    return (str1 + str1).includes(str2)

}

// Example usage
console.log(areRotations("waterbottle", "erbottlewat")); // Expected output: true
console.log(areRotations("hello", "olleh")); // Expected output: false

  /*
  Print number of rotations needed to make two strings equal.
  Input: "amazon", "azonam"
  Output: 2
  */
  function noOfRotations(str1, str2){
    const combined = str1 + str1
    const index = combined.indexOf(str2)
  
    return index !== -1 ? index : -1
  }
//   console.log(noOfRotations("amazon", "azonam"))