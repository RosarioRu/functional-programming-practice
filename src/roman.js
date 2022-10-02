export default function recursiveRoman(number) { 
  if (isNaN(number) ||(number<1) || (number>3999)) {
    return "Not a valid number; please enter a number between 1-3,999";
  }
  if (number>=1000) {
    if (number-1000 === 0) {
      return ("M");
    } else {
    return ("M" + (recursiveRoman(number-1000)));
    }
  }
  if (number>=500) {
    if (number-500 === 0) {
      return ("D");
    } else {
    return ("D" + (recursiveRoman(number-500)));
    }
  }
  if (number>=100) {
    if (number-100 === 0) {
      return ("C");
    } else {
    return ("C" + (recursiveRoman(number-100)));
    }
  }

};