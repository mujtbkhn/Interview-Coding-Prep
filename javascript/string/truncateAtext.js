// Function to truncate text to a specified length and add ellipsis if needed
function truncateText(str, k) {
    // Check if the length of the string is greater than the specified length (k)
    // If true, slice the string to the specified length and add "..." at the end
    // Otherwise, return the original string
    return str.length > k ? str.slice(0, k) + "..." : str
}
console.log(truncateText("subscribe to mujtaba khan", 11))
