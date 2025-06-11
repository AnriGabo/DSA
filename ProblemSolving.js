// Input --> string and number
// processing
// Output --> string

// Write a function that converts an object into an array of keys and values.

// -->Input Object
// Object.keys, Object.values,Object.entries, Object.fromEntries,

const arrayToObject = (arg) => {
  return Object.fromEntries(arg)
};

console.log(
  arrayToObject([
    ["anri", "gabo"],
    ["anriko", "gabo"],
    ["daviti","daviti"]
  ])
);

//-->  Output [ [] [] [ ]] key valueდალაგეუბლი,მასივის სახით
