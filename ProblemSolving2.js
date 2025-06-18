// Create a function that takes an integer n and reverses it.

// შექმენით ფუნქცია, რომელიც იღებს სტრინგის მთელ რიცხვს და აბრუნებს მას, reverse, reduce : )
// Math.abs  negative convert to positive

function reverseTheNumber(reverse) {
  return Math.abs(reverse)
    .toString()
    .split("")
    .reduce((acc, char) => char + acc, 0);
}

console.log(reverseTheNumber("-23432423"));
