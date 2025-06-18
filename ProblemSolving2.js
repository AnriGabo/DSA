// Return the Highest and Lowest Numbers

// Input String სივრცეებით გამოტოვებული ციფრები

// Output String ყველაზე დიდი ციფრი პირველი, და მერე ყველაზე დაბალი ციფრი მეორე

// -- იმ შემთხვევაში რეალურად თუ იქნება 1 ციფრი, დააბრუნებს 1ს ორად ანუ ეგ იქნება დიდიც და პატარაც


function highLow(strNum){
    const convertToArrayString = strNum.split(" ")
    const highestNum = convertToArrayString.sort((a,b) => b -a ).slice(0,1);
    const lowestNum = convertToArrayString.sort((a,b) => a - b).slice(0,1);
    return `"${highestNum} ${lowestNum}"`

}

console.log(highLow("10 3204 234 2340234324 23402304 30"))