// Create a function that takes a string and returns a new string with its first and last characters swapped,

// Input შექმენით ფუნქცია რომელიც იღებს სტრინგს

// Output და აბრუნებს ახალ სტრინგს მის პირველ და ბოლო ასოების გაცვლით
// თუ წერია რომ Anri -> inrA, და ასე შემდეგ

// ეს პირობა უნდა გავითვალისწინოთ აგერ

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".

function flipEndChars(word) {
  // სამივე If-ს შეადარებს და თუ სამივე True იყო დააბრუნებს ბოლო Return-ს
  if(word.length <= 2) return "Incompatible, To Short";
  if(typeof word != "string") return "Incompatible, Wrong Type";
  if(word[0] === word[word.length - 1]) return "Incompatible, Two's Pair";

  return word.split("").reduce((acc,char) => char + acc,  "")
}

console.log(flipEndChars("cat, mouse, dog."));
