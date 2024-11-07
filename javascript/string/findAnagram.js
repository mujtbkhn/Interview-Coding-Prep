function validAnagram(s, t) {
   const mutate = str => str.split('').sort().join('')
   return mutate(s) === mutate(t)
}

// Example usage
console.log(validAnagram('anagram', 'nagaram')); // Expected output: true

  
  /*
  Print number of anagrams of a given word in a text.
  Input: "listen", "Silent night, listen to the sound"
  Output: 2 (listen, silent)
  */
  function printAnagrams(word, str){
   word = word.toLowerCase().split('').sort().join('');
   let words = str.toLowerCase().split(' ')
 
   return words.filter(item => item.split('').sort().join('') === word).length
 }
//  console.log(printAnagrams("listen", "Silent night, listen to the sound"))