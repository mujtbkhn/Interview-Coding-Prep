// Create an object from a string
// Input: str (stringified JSON or valid object representation)
// Output: Object created from the string
// Approach:
// - Use JSON.parse to convert the string to an object
function StrToObj(str) {    
    return JSON.parse(str)
}
// Example usage:
console.log(StrToObj('{"x": {"y": {"z": "convert"}}}'));
