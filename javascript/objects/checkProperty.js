// Requirement: Check if two objects have the same properties with the same values, regardless of the order of properties.
// Input: 
//   obj1 = { name: 'John', age: 30, new: 'mujju' }
//   obj2 = { age: 30, name: 'John', new: 'mujju' }
// Output: 
//   true

const checkProp = (obj1, obj2) => {
    // Compare properties and values of obj1 and obj2
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
}

// Example usage
const o1 = { name1: 'John', age: 30, new: 'mujju' };
const o2 = { age: 30, name: 'John', new: 'mujju' };
console.log(checkProp(o1, o2));
