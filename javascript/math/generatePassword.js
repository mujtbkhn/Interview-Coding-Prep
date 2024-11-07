// Requirement: Write a function to generate a random password of a given length, using uppercase letters, lowercase letters, and digits.
// Input: 
//   length = 8
// Output: 
//   A random string of 8 characters, e.g., "aB3kL9pQ"


function randomPassword(length) {
    // Generate a random password of the specified length
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

// Example usage
console.log(randomPassword(8));
