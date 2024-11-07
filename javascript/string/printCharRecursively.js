// implement recursion function to print every character of string , after that it should print "its vowel" for every vowel from string.

function printChar(str) {
    let string = ''
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            string += `${str[i]} => its a vowel` + '\n'
        } else {
            string += str[i] + '\n'
        }
    }
    return string
}

function isVowel(n) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (!vowels.includes(n)) {
        return false
    } else {
        return true
    }
}
console.log(printChar("mujju"))