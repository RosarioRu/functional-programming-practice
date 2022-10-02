import recursiveRoman from './../src/roman.js';

describe('recursiveRoman', () => {

  // tests go in here

  test("should return an error when the function is given anything other than a real number", () => {
    expect(recursiveRoman("hi")).toEqual("Not a number.");
  });

  test("should return undefined when a number is passed into it -- for now", () => {
    expect(recursiveRoman(5)).toEqual(undefined);
  });

  test("should return error when a number <1 is passed into function", () => {
    expect(recursiveRoman(0)).toEqual("Not a valid number; please enter a number between 1-3,999");
  });

  test("should return error when a number >3,999 is passed into function", () => {
    expect(recursiveRoman(4000)).toEqual("Not a valid number; please enter a number between 1-3,999");
  });


});
