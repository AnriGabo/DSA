// Input --> string and number
// processing
// Output --> string


//Medium Level Array task

// The values false, null, 0, "", undefined, and NaN are falsey.

// -->Input შედის ყველა ტიპის ელემენეტი მასივშიი 
// 
// Processing -> ვფიქრობ ნამბერ ტიპად ხოარ მოვაქციო თითოეული თქო Number, for loopში

// Output: მხოლოდ ნამბერების მასივი

const compact = (arr) => {
  return arr.filter((Item) => Boolean(Item) === true);
}

console.log(compact([0,1,false,"",null,2,3,undefined]))