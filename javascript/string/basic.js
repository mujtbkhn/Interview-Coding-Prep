// 1. Count the Number of Vowels in a String
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let map = new Map();
    for (let char of str) {
        if (vowels.includes(char)) {
            map.set(char, (map.get(char) || 0) + 1)
        }

    }
    for (let [key, value] in map) {
        return `${key}: ${value}`
    }
    return map
}

// Example usage:
// console.log(countVowels('"helluuuo worldaaaa"'))

// Christmas Tree Pattern
function christmasTree() {

}

// Example usage:
// christmasTree()

// Check if a string contains a certain pattern.
function containsPattern(str, pattern) {

}

// Example usage:
// let mainStr = "abcde aadvc";
// let pattern = "bcd";
// console.log(containsPattern(mainStr, pattern)); 

// Capitalize the first letter of each word in a string.
// function capitalize(str) {

// }

// Example usage:
// console.log(capitalize('abhay is cool'))

// Convert a string to an object.
function StrToObj(str) {

}

// Example usage:
// console.log(StrToObj("x.y.z", "convert"))

// Reverse a string without using loop or predefined functions.
const reverse = str => {

};

// Example usage:
// console.log(reverse("mujtaba"))

// Get matching and non-matching characters between two strings.
function matchAndNon(str1, str2) {

}

// Example usage:
// console.log(matchAndNon("mujju", "mujtaba"))

// Count the number of vowels and consonants in a string.
function vowelAndCon(str) {

}

// Example usage:
// console.log(vowelAndCon("mujtaba"))

// Check if a string contains only digits.
const isDigit = (str) => {
    return str.split('').map(item => item >= "0" || item <= "9") === +str
};

// Example usage:
console.log(isDigit("123"))

// Print the first non-repeated character from a string.
const firstNonRepeated = str => {

};

// Example usage:
// console.log(firstNonRepeated("racecar"))

// Check if two strings are rotations of each other.
const isRotation = (str1, str2) => {

};

// Example usage:
// console.log(isRotation("mujju", "jjumu"))

// Convert a string with hyphens and underscores to camel case.
const toCamelCase = str => str.replace(/[_-](.)/g, (_, c) => c.toUpperCase())

// Example usage:
console.log(toCamelCase('secret_key-one'))

// Convert a string to an integer, handling non-numeric characters gracefully.
const strToInt = str => {
    return +str === +str ? +str : false
};

// Example usage:
// console.log(strToInt("1235 mujju"))

// Capitalize the first letter of each word in a given sentence.
const capitalize = str => {
    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
};

// Example usage:
// console.log(capitalize('hello world, this is a test'))

// Find the longest word in a given sentence.
const longestWord = sentence => {
    return sentence.split(' ').reduce((acc, curr) => curr.length > acc.length ? curr : acc)
}

// Example usage:
// console.log(longestWord('The quick brown fox jumpss over the lazy dog'))

// Check if a string has balanced parentheses.
const checkValid = str => {

};

// Example usage:
// console.log(checkValid("((((()))))"))

// Truncate a string to a specified length and append “…” if it exceeds that length.
const truncateAstr = (str, k) => {
    return str.length > k ? str.slice(0, k) + "..." : str
};

// Example usage:
// console.log(truncateAstr("This is a very long string that needs to be truncated", 20))

/*
Print number of vowels in a given string.
Input: "Hello World"
Output: 3
*/
function printVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0
    for(let char of str){
      if (vowels.includes(char.toLowerCase())){
        count++
      }
    }
    console.log(count)
    return count;
  }
  printVowels("Hello World")
  
  /*
  Print number of unique characters in a given string.
  Input: "programming"
  Output: 7
  */
  function printUnique(str){
    const unique = str.split('').filter((item, i) => str.indexOf(item) === i).length
    console.log(unique)
  }
  printUnique("programming")
  
  /*
  Print number of words in a given sentence.
  Input: "The quick brown fox jumps over the lazy dog"
  Output: 9
  */
  function countWords(str){
    return str.split(' ').length
  }
  console.log(countWords( "The quick brown fox jumps over the lazy dog"))
  
  /*
  Print number of consonants in a given string.
  Input: "Hello World"
  Output: 7
  */
  function printConsonants(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let char of str){
      if(/[a-z]/.test(char) && !vowels.includes(char.toLowerCase())){
        count++
      }
    }
    return count
  }
  console.log(printConsonants("Hello World"))
  
  
  /*
  Print number of times a pattern appears in a text (string matching).
  Input: "ABABABA", "ABA"
  Output: 3
  */
  function printPattern(str, pattern){
    let count = 0;
    let patternLength = pattern.length;
    for(let i=0;i<str.length; i++){
      if(str.substring(i, i+ patternLength) === pattern){
        count++
      }
    }
    return count
  }
  console.log(printPattern("ABABABA", "BA"))
  
  //count uppercase letters in a string
  function countUppercaseLetters(str) {
    return str.split('').filter(char => char >= 'A' && char <= 'Z').length;
}

console.log(countUppercaseLetters("Hello World"));  // Output: 2