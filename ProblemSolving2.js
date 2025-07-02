// Temperature Converter

// Create a function that converts Celsius to Fahrenheit and vice versa.
// Round to the nearest integer. Math.Round
// If input is incorrect - return errror

// თუ ინფათს ექნება ცელსიუსი C კონვერტაცია როგორც F,თუ იქნება როგორც F კონვერტაცია როგორც C
function convert(value, unit) {
  if(unit === "C"){
    return (value * 9/5) + 32 + "F";
  }else if(unit === "F"){
    return (value - 32) * 9/5 + "C"
  }else{
    return "Error"
  }
} 

console.log(convert(19, "F"));
