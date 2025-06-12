// Input --> string and number
// processing
// Output --> string

let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

// -->Input ში პარამეტრი ღებულობს ამ მასივს

//-->Ouput -->ნებისმიერი ელემენტი რომელიც არ იქენაბ სტრინგი ეწოდოს el და დალოგოს ფუნქციამ რომ ეს el უნდა იყოს სტრინგ

function checkCustomArray() {
  for (var i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] != "string") {
      console.log(`type error ${el} should be a string`);
    }
  }
}

console.log(checkCustomArray(customersArray));
