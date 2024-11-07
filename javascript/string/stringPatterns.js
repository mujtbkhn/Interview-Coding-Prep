// Question 1: Christmas Tree Pattern
// output : 
/**
 

    *
   ***
  *****
 *******
*********
    |


 */

function ChristmasTree(rows) {
    let trees = ''
    for (let i = 0; i < rows; i++) {
        const spaces = ' '.repeat(rows - i + 1)
        const stars = "*".repeat(2 * i + 1)
        trees += spaces + stars + '\n'
    }
    trees += ' '.repeat(rows - 1) + '|'
    console.log(trees)
    return trees
}
// ChristmasTree(5)

// Question 2: Mountain Pattern
// output : 

/**
 
   /\
  /  \
 /    \
/      \

 */

function mountainPattern(rows) {
    let mountain = ''

    for (let i = 0; i < rows; i++) {
        let spaces = ' '.repeat(rows - i + 1)
        let innerSpaces = ' '.repeat(2 * i);
        mountain += spaces + '/' + innerSpaces + '\\' + '\n';
    }
    return mountain

}
console.log(mountainPattern(5))

/*
            *
            **
            ***
            ****
            *****
            ******
            ******
            *****
            ****
            ***
            **
            *
*/

function arrow(n){
    for(let i=1; i<=n; i++){
        console.log("*".repeat(i))
    }
    for(let i=n; i>=1; i--){
        console.log("*".repeat(i))
    }
}
// console.log(arrow(6))