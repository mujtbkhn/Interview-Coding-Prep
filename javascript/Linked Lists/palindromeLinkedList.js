var isPalindrome = function(head) {
    let node = head
    let string1 = string2 = ""
    while(node !== null){
       string1 = `${string1}${node.val}`
       string2 = `${node.val}${string2}`
       node = node.next
    }
    return string1 === string2
};

console.log(isPalindrome([1221]))