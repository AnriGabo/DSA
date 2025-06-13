// Hitting the jackpot

// შექმენით ფუნქცია რომელიც იღებს მასივს

// Total Volume of All Boxes;


// Create function that takes 2 arguments
//Input --> 2 String argument, first string is single charachter

// processing --> includes, first index of, last index of,

function charCount(char,word){
    const SplitTheWord = word.split("");
    return SplitTheWord.filter((item) => item === char).length;
}

console.log(charCount("b","big fat bubble"))

// Output რამდენჯერ განმეორდა პირველი სტრინგი მეორესტრინგში
