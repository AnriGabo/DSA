// input - takes a string as an argument,


// რაოდენობას არ ვაბრუნებთ
// ვაბრუნებთ მარცხენა მხარეს არსებული ციფრი უნდა დავაბრუნოთ

// find,პირველივე შემხვედრს დააბრუნებს და დანარჩენს დაიკიდებს

// isNaN means  = is Not a number, string - correct because string is not a numbet,but !isNan means is Number;

function leftDigit(str){
    return str.split("").filter((item) => !isNaN(item)).map(Number).slice(0,1)
}

console.log(leftDigit("TrAdE21352434234234222223210W1n95"))