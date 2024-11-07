// Compare two objects deeply to check if they are equal
// Input: obj1, obj2 (objects to compare)
// Output: true if deeply equal, false otherwise
// Approach: 
// - Check if both objects are strictly equal
// - Verify both are objects and not null
// - Compare the length of their keys
// - Recursively compare values of each key
const compareObjects = (obj1, obj2) => {
   if (obj1 === obj2) {
      return true
   }
   if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
      return false
   }
   let keys1 = Object.keys(obj1)
   let keys2 = Object.keys(obj2)

   if (keys1.length !== keys2.length) {
      return false
   }

   for (let key of keys1) {
      if (!keys2.includes(key) || !compareObjects(obj1[key], obj2[key])) {
         return false
      }
   }
   return true
};

// Example usage:
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 2 } };
// console.log(compareObjects(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 3 } };
// console.log(compareObjects(obj1, obj3)); // false

// Check if two objects are shallowly equal
// Input: obj1, obj2 (objects to compare)
// Output: true if shallowly equal, false otherwise
// Approach:
// - Compare the length of keys
// - Check if values for each key are strictly equal
const shallowEqual = (obj1, obj2) => {
   /* logic */
   if (obj1 === obj2) {
      return true
   }
   if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
      return false
   }
   let keys1 = Object.keys(obj1)
   let keys2 = Object.keys(obj2)

   if (keys1.length !== keys2.length) {
      return false
   }

   for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
         return false
      }
   }
   return true

};

const obj1 = { a: 1, b: 5 };
const obj2 = { a: 1, b: 5 };
console.log(shallowEqual(obj1, obj2))