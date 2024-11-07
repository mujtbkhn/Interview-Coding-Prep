// Function to check if a number is a palindrome
function palindrome(num) {
    return num.toString().split('').reverse().join('') === num.toString()
}

// Example usage
// console.log(palindrome(121)); // Expected output: true

// Function to check if a string is a palindrome
function Palindrome(str) {
   return str.split('').reverse().join('') === str   
}

// Example usage
// console.log(Palindrome("racecar")); // Expected output: true

  /*
  Print number of palindromes in a given sentence.
  Input: "madam arora teaches malayalam"
  Output: 3 (madam, arora, malayalam)
  */
  function printPalindromes(str){
    str = str.split(' ')
    let count = 0
    for(let char of str){
      if(char.split('').reverse().join('') === char){
        count++
      }
    }
    return count
  }
//   console.log(printPalindromes("madam arora moon noon teaches malayalam"))
  