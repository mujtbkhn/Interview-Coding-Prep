// Requirement: Combine hobbies of people and find common hobbies between each pair of people.
// Input: 
//   obj = { 
//     "harsh": ["cricket", "volleyball"], 
//     "aasim": ["cricket", "football", "ludo", "COD", "rugb", "volleyball", "Racing"], 
//     "jignesh": ["cycling", "cricket"], 
//     "jimish": ["cycling"], 
//     "prince": ["volleyball", "football"], 
//     "raj": ["ludo", "cricket", "cycling"] 
//   }
// Output: 
//   { 
//     "harsh, aasim": ["cricket", "volleyball"], 
//     "harsh, jignesh": ["cricket"], 
//     "harsh, jimish": [], 
//     "harsh, prince": ["volleyball"], 
//     "harsh, raj": ["cricket"], 
//     "aasim, jignesh": ["cricket"], 
//     "aasim, jimish": [], 
//     "aasim, prince": ["volleyball", "football"], 
//     "aasim, raj": ["ludo", "cricket"], 
//     "jignesh, jimish": ["cycling"], 
//     "jignesh, prince": [], 
//     "jignesh, raj": ["cycling"], 
//     "prince, raj": [] 
//   }

const combineHobbies = obj => {
    // Combine hobbies of each pair of people and find common hobbies
}

// Example usage
// console.log(combineHobbies({ 
//     "harsh": ["cricket", "volleyball"], 
//     "aasim": ["cricket", "football", "ludo", "COD", "rugb", "volleyball", "Racing"], 
//     "jignesh": ["cycling", "cricket"], 
//     "jimish": ["cycling"], 
//     "prince": ["volleyball", "football"], 
//     "raj": ["ludo", "cricket", "cycling"] 
// }));
