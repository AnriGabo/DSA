// Return the Highest and Lowest Numbers

// Input String სივრცეებით გამოტოვებული ციფრები

// Output String ყველაზე დიდი ციფრი პირველი, და მერე ყველაზე დაბალი ციფრი მეორე

// -- იმ შემთხვევაში რეალურად თუ იქნება 1 ციფრი, დააბრუნებს 1ს ორად ანუ ეგ იქნება დიდიც და პატარაც

function highLow(strNum) {
  const convertToNumber = strNum.split(" ").map(Number);

  const highestNum = Math.max(...convertToNumber);
  const lowestNum = Math.min(...convertToNumber);

  return `"${highestNum} ${lowestNum}"`;
}

// Math max, math min

console.log(highLow("1 2 3 4 5"));
