// Reverse a string without using the reverse() method.
function reverse(str) {
    // return str.split(' ').reverse()

    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
// console.log(reverse("hello moto!"))

// reverse string without loop or predefined function(like reverse)
function reverseWithoutInbuilt(str) {
    if (str === "") return '';
    return reverseWithoutInbuilt(str.slice(1)) + str[0]
}
console.log(reverseWithoutInbuilt("Mujtaba khan   $  abdul!"))