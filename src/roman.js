

export default function recursiveRoman(number) {
  if (isNaN(number) ||(number<1) || (number>3999)) {
    return "Not a valid number; please enter a number between 1-3,999";
  }
  if (number>=1000) {
    if (number-1000 === 0) {
      return ("M");
    } else {
    return ((recursiveRoman(number-1000)) + "M");
    }
  }
  if (number>=500) {
    if (number-500 === 0) {
      return ("D");
    } else {
    return ((recursiveRoman(number-500)) + "D");
    }
  } 
};