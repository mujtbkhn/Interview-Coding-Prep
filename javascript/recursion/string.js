//reverse a string with recursion 
// hello => olleh

var string = function (str) {
    if (str === '') return ''
    return string(str.slice(1)) + str[0]
}
console.log(string("hello"))

var string = function (str) {
    if (str.length === 0) return ""
    return str.slice(str.length - 1) + string(str.slice(0, str.length - 1))
}
console.log(string("hello"))

//reverse the words in a string
//The Sky is Blue => Blue is Sky The

function reverse(str) {
    str = str.split(' ');  // Split the string into words
    if (str.length === 0) return '';  // Base case: empty array

    return str.slice(1).length ? reverse(str.slice(1).join(' ')) + ' ' + str[0] : str[0];
}

const str1 = "The sky is Blue";
console.log(reverse(str1));  // Output: "Blue is sky The"
