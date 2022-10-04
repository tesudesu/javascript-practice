function palindrome(str) {
  // Remove any symbols or spaces. Change string to all lower case.
  let word = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let count = 0;
  // Find the number of characters to the middle of word. 
  // If word is even, middle is exactly half the length of the word. 
  // If word is odd, middle does not include the center character. 
  let middle = Math.floor(word.length/2); 
  // Compare the first character with the last, the second with the second-last, etc., up to the middle. 
  // If there is a mismatch, immediately return false. Otherwise, word must be a palindrome, so return true.
  for (let i = 0; i < middle; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
  
  
  palindrome("eye"); // true
  palindrome("race car"); // true
  palindrome("not a palindrome"); // false
  palindrome("A man, a plan, a canal. Panama"); // true
  palindrome("never odd or even"); // true
  palindrome("almostomla"); // false
  palindrome("My age is 0, 0 si ega ym."); // true
  palindrome("five|\_/|four"); // false