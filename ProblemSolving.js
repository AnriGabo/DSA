// Input --> string and number
// processing
// Output --> string

// Data Structure 1 array
// Given two strings, create a function that returns the total number of unique characters from the combined string.

// countUnique("apple", "play") ➞ 5
// // "appleplay" has 5 unique characters:
// // "a", "e", "l", "p", "y"

// -->Input  2 სტრინგი,
// -->length, split, join, sprad
// როცა დუბლიკატები არ არსებობს
function countUnique(word, word1) {
  const str = word + word1;
  return uniqueStr = [...new Set(str)];
}

console.log(countUnique("apple", "play"));
