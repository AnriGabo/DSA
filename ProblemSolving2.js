// count of vowels

// input string
// a, e, i, o, u is vowel
// function vowelsCharachter(vowel) {
//   const vowCharachter = vowel.split("");
//   const filterElement = vowCharachter.filter(
//     (item) => item === "a" || item === "e" || item === "i" || item === "o" || item === "u"
//   );

//   return filterElement.length;
// }

// console.log(vowelsCharachter("Palm"));
// // output რამდენ ხმოვანს შეიცავს ჩვენი სიტყვა და დააბრუნოს ლენგსი

const countVowels = (str) => {
  const vowels = "aeiou";
  return str.toLowerCase().split("").filter((char) => vowels.includes(char)).length
};

console.log(countVowels("Hello"))