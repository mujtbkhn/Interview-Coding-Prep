// Example usage
const fruits = [
    "apple",
    "banana",
    "orange",
    "mango",
    "grape",
    "pineapple",
    "strawberry",
    "blueberry",
    "kiwi",
    "watermelon",
    "peach",
    "cherry",
    "pomegranate",
    "pear",
    "plum",
    "raspberry",
    "blackberry",
    "coconut",
    "lemon",
    "lime"
];

// Function to filter fruits based on the starting string
function searchFruits(str, fruits) {
    // Return fruits that start with the given string
    let searchedFruits = []
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i]
        if (fruit.startsWith(str)) {
            searchedFruits.push(fruit)
        }
    }
    return searchedFruits
}

const arr = searchFruits("p", fruits)
console.log(arr); // Expected output: fruits starting with 'p'
