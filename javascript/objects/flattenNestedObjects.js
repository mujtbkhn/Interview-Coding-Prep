function flattenObject(obj, parentKey = '', result = {}) {
    for (const [key, value] of Object.entries(obj)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            flattenObject(value, newKey, result);  // Recursively flatten nested objects
        } else {
            result[newKey] = value;  // Add non-object values to the result
        }
    }
    return result;
}

const object1 = { a: 1, b: { c: 1, d: { e: 2 } } };
console.log(flattenObject(object1));

/*
{
  "a": 1,
  "b.c": 1,
  "b.d.e": 2
}
*/