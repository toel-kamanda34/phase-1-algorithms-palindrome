function isPalindrome(word) {
    // Converting word to lowercase
    word = word.toLowerCase();
  
    // Initializing the two pointers
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
      if (word[left] !== word[right]) {
        return false;
      }
      left++;
      right--;
    }
    
    return true;
  
}

/* 
   pseudocode 
   1. Make all letters in the word lowercase
   2. Set up two pointers: one at the start of the word, one at the end
   3. While the start pointer hasn't met or passed the end marker:
          a. Look at the letters where the markers are pointing
          b. If these letters are different:
              - The word is not a palindrome, so answer "No" (return false)
          c. If the letters match:
              - Move the start marker one letter to the right
              - Move the end marker one letter to the left

4. If we've checked all the letters without finding any mismatches:
   - The word is a palindrome, so answer "Yes" (return true)

*/

/*
  written explanation of my solution 
  I started by making all letters lowercase. Then, I compared the first and last letters. If they match, I moved inward and compared the next pair. I keep doing this until I reached the middle. If all pairs matched, it's a palindrome! If any pair didn't match, it's not. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional test 
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
