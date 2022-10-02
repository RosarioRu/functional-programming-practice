

export default function recursiveRoman(number) {
  if (isNaN(number)) {
    return "Not a number.";
  }
  if (number<1 || number>3999) {
    return "Not a valid number; please enter a number between 1-3,999";
  }
  
};