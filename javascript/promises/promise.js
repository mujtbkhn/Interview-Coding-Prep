// Fetch and log 10 random numbers from a Promise-based function
// Input: None
// Output: Array of 10 random numbers
// Approach:
// - Create an array of promises using getData()
// - Use Promise.all to wait for all promises to resolve
// - Log the results
const getData = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100))
        }, 100);
    })
}
const getResult = async () => {
    let result = []
    for(let i =0; i< 10; i++){
        result.push(getData())
    }
    const promise = await Promise.all(result)
    console.log(promise)
}

// Example usage:
getResult()
