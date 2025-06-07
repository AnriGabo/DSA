// Input --> string and number
// processing
// Output --> string

// Task:
// Create a function which takes in a word and spells it out

// input --> ორი სტრინგი, და უნდა გავიგოთ პირველი პარამეტრი რომელ ინდექსზე შეიცავს მეორე პარამეტრს

//output --> გამოიტანოს რომელ ინდექსზე შეიცავს მეორე პარამეტრს

const index = (word, i) => {
  return word.includes(i)
    ? `the charachter ${i} has first index ${word.indexOf(
        i
      )} and last index ${word.lastIndexOf(i)}`
    : `the charachter ${i} does not exist`;
};

console.log(index("hello", "l"));

// ------------------------------------------------------------------------------------------------------------------
