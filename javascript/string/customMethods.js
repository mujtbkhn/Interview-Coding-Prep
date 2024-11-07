// Function to create a custom repeat method for a string
function customRepeat(str, n) {
   let repeat = ''
   for(let i=0; i<n; i++){
       repeat += str  
   }
   console.log(repeat);
}

// Example usage
customRepeat("Hello", 3);  // Expected output: "Hello Hello Hello"
