// print arrays own properties only
Array.prototype.extraProperty = "abdul khan"

// Problem: Print only the original properties of an array, excluding inherited properties from the prototype chain.
// Example input: arr = [1, 'mujju', 5, 78, 'hitesh', true]
// Example output: 1, 'mujju', 5, 78, 'hitesh', true
const arr = [1, 'mujju', 5, 78, 'hitesh', true]
let result = []
for(let v in arr){
   if(arr.hasOwnProperty(v)){
      result.push(arr[v])
   }
}
console.log(result)
