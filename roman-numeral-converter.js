function convertToRoman(number) {
    // Create function remainderRecursion that takes a number and returns the largest fitting roman numeral and the remainder. 
    function remainderRecursion(num) {
      let result = "";
      let remainder = 0;
      if (num >= 1000) {
        result = "M";
        remainder = num - 1000;
      } else if (num >= 900 && num < 1000) {
        result = "CM";
        remainder = num - 900;
      } else if (num >= 500 && num < 900) {
        result = "D";
        remainder = num - 500;
      } else if (num >= 400 && num < 500) {
        result = "CD";
        remainder = num - 400;
      } else if (num >= 100 && num < 400) {
        result = "C";
        remainder = num - 100;
      } else if (num >= 90 && num < 100) {
        result = "XC";
        remainder = num - 90;
      } else if (num >= 50 && num < 90) {
        result = "L";
        remainder = num - 50;
      } else if (num >= 40 && num < 50) {
        result = "XL";
        remainder = num - 40;
      } else if (num >= 10 && num < 40) {
        result = "X";
        remainder = num - 10;
      } else if (num == 9) {
        result = "IX";
        remainder = num - 9;
      } else if (num >= 5 && num < 9) {
        result = "V";
        remainder = num - 5;
      } else if (num == 4) {
        result = "IV";
        remainder = num - 4;
      } else if (num >= 1 && num < 4) {
        result = "I";
        remainder = num - 1;
      }
      return [result, remainder];
    }
    // Run remainderRecursion on, first, the initial number, and, subsequently, the remainders. Save the output to variables.
    let string = remainderRecursion(number)[0];
    let remain = remainderRecursion(number)[1];
    // If there is a remainder, i.e. remainder >= 1, run the function convertToRoman again with the remainder as the input, until remainder = 0.
    // Each time, add the new roman numeral to string.
    if (remain >= 1) {
       string += convertToRoman(remain);
     } 
     return string;
   }
   
   convertToRoman(36); // XXXVI
   convertToRoman(649); // DCXLIX
   convertToRoman(3999); // MMMCMXCIX