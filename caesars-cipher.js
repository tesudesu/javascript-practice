function rot13(str) {
  // create alphabet template with a repeat to account for wrapping
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let regex = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    // if current character is a letter
    if (regex.test(str[i])) {
      result += alphabet[alphabet.indexOf(str[i]) + 13];
    } else {
      result += str[i]; // if current character is not a letter, add it to the result string as it is 
    }
  }
  return result;
}
  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.