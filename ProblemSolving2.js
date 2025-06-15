// -->input: String word
// processing: reverse
// Output: reverse the string word by word, first word will be the last, and last will be first

function reverseWord(opositeWord) {
  return opositeWord.split(" ").reverse().join("-")
}

console.log(reverseWord("anri gabaidze"));
