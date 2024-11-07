// Group an array of objects by a specified property
// Input: arr (array of objects), property (property name to group by)
// Output: An object where each key is a unique property value, and each value is an array of objects that have that property value
// Approach: 
// - Use reduce to accumulate the results into an object
// - For each object, add it to an array in the result object based on the value of the specified property
const groupByProp = (arr, property) => { /* logic */ };

// Example usage:
// const people = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Alice', age: 28 },
// ];
// console.log(groupByProp(people, "name"));
