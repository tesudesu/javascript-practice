function telephoneCheck(str) {
    let regexNum = /[0-9]/;
    let regexDashNum = /[0-9]{3}-[0-9]{4}/;
    let regexAreaCode = /\([0-9]{3}\)/;
    let countNum = 0;
    // Count the number of digits in the string.
    for (let i = 0; i < str.length; i++) {
      if (regexNum.test(str[i])) {
        countNum++;
      }
    }
    // Filter out any string that doesn't contain 10 or 11 digits.
    if (countNum !== 10 && countNum !== 11) {
      return false;
    }
    // If the string has 11 digits, the first digit must be 1.
    if (countNum === 11 && str[0] != 1) {
      return false;
    }
    // If the string contains a dash, the dash must appear in the format of XXX-XXXX.
    if (/-/.test(str)) {
      if (!regexDashNum.test(str)) {
        return false;
      }
    }
    // If the string contains either an open or close parenthesis, the parenthesis must appear in the format of (XXX).
    if (/\(|\)/.test(str)) {
      if (!regexAreaCode.test(str)) {
        return false;
      }
    }
    return true;
  }

telephoneCheck("1 555-555-5555"); // true
telephoneCheck("10 (757) 622-7382"); // false
telephoneCheck("(6054756961)"); // false
telephoneCheck("555)-555-5555"); // false
telephoneCheck("(555-555-5555"); // false
telephoneCheck("(555)5(55?)-5555"); // false
telephoneCheck("55 55-55-555-5"); // false

