// Function to get the current date in the format “YYYY-MM-DD”
const currDate = () => {
    let date = new Date().toISOString().split('T')[0]
    return date
}
// console.log(currDate())

// Example usage
// console.log(currDate())

// Function to create a countdown array from a given number
const countDown = num => (
    Array.from({ length: num }, (_, i) => num - i)
)

// Example usage
// console.log(countDown(15))

// Function to generate a random integer between a specified minimum and maximum value (inclusive)
const randomInt = (min, max) => {
    // Generate a random integer within the range [min, max]
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min
    return randomValue
}

// Example usage
// console.log(randomInt(5, 8))

// Function to convert a given number of minutes into hours and minutes
const toHrsandMin = n => {
    let hours = n / 60;
    let minutes = n % 60;
    return `${hours.toFixed(2)}hrs , ${minutes}mins`
}

// Example usage
// console.log(toHrsandMin(125))

// Function to generate an array of specified length filled with random numbers
const generateArray = len => {
    let array = []
    for (let i = 0; i < len; i++) {
        const ran = Math.floor(Math.random() * 100);
        array.push(ran)
    }
    return array
}

// Example usage
// console.log(generateArray(5))
