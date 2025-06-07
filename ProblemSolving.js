// Input --> string and number
// processing
// Output --> string

// sum of the digits of a positive integer

// input არის 1 გაერთიანებული ნამბერები რაც 1 არგუმენტს მიეწოდება, პირობითად 4 ციფრი, და ეს უნდა დაემატოს ერთმანეთ

function integerNum(allNum) {
  const convert = [allNum];
  const converToString = convert.join("").split("");

  const newArray = [];

  for (var i = 0; i < converToString.length; i++) {
    newArray.push((Number(converToString[i])));
  }
  return newArray.reduce((acc, cur) => acc + cur, 0);
}

console.log(integerNum(234234324329));
// return
