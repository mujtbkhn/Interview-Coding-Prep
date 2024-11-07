// split a string based on the key provided

function split(str, key) {
    // should be able to split any string provided a key
    let currentWord = '';
    let result = [];
    for (let char of str) {
        if (char === key) {
            result.push(currentWord)
            currentWord = ''
        } else {
            //char to include everything previously
            currentWord += char
        }
    }
    if (currentWord) {
        result.push(currentWord)
    }
    return result
}
console.log(split("mujju, buttu, ashu | sonu, farru", " "))