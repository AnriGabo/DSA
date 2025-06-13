// Hitting the jackpot

// შექმენით ფუნქცია რომელიც იღებს მასივს

// Task:Finding Nemo

// input string of words

//uoutput order of the word nemo

function findNemo(Nemo) {
  const CheckExistNemoOrNot = Nemo.includes("Nemo");
  const FindingNemo = Nemo.split(" ").indexOf("Nemo") + 1;
  const Texting = `I Found Nemo at ${FindingNemo}`;
  return CheckExistNemoOrNot ? Texting : console.log("Nemo Does Not Exist");
}

console.log(findNemo("Nemo I am finding!"));
