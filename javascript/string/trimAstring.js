// trim a string of the starting and ending white spaces

function trim(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < str.length && str[start] === " ") {
        start++;
    }
    while (end < str.length && str[end] === " ") {
        end--;
    }
    let temp = '';
    for (let i = start; i <= end; i++) {
        temp += str[i]
    }
    return temp
}
console.log(trim("        hello world    "))