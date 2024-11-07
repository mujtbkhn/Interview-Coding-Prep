// Requirement: Sort an array of braces such that each left brace comes before its matching right brace, while maintaining the order of pairs.
// Input: arr = ["(", "}", "]", "{", ")", "["]
// Output: ["(", ")", "{", "}", "[", "]"]

// Approach:
// 1. Create a mapping of left braces to their corresponding right braces.
// 2. Iterate through the array to find and pair each left brace with its corresponding right brace.
// 3. Ensure each left brace is paired with its corresponding right brace and ordered correctly.

function sortBraces(arr) {

    let bracePairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    let result = []
    for (let char of arr) {
        if (char === "(" || char === '[' || char === '{') {
            result.push(char, bracePairs[char])
        }
    }

    return result;
}

// Example usage
console.log(sortBraces(["(", "]", "{", "}", "[", ")"]));
