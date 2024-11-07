// Function to check if parentheses in a string are valid
function isValid(str) {
    str = str.split('');

    let bracePairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let stack = [];
    for (let char of str) {
        if (bracePairs[char]) {
            stack.push(char)
        }
        else if (Object.values(bracePairs).includes(char)) {
            if (stack.length === 0 || bracePairs[stack.pop()] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
}

// Example usage
console.log(isValid("{}()[{}]")) // true
console.log(isValid("({[}])")) // false 

  /*
  Print number of balanced parentheses pairs in a string.
  Input: "((())())"
  Output: 4
  */
  function countBalanced(str){
    str=  str.split('');
    let stack =[]
    let count = 0
    for(let char of str){
      if(char === "("){
        stack.push(char)
      }else if(char === ")" && stack.length > 0){
        stack.pop()
        count++
      }
    }
    return count
  }
//   console.log(countBalanced("((())()))))"))