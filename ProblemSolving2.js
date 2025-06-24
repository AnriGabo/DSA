// Input array of number
// Ouput array with 2 elements პირველი ელემენტი არის ლუწი ციფრების ჯამი, მეორე ელემენტი არის კენტი ციფრების ჯამი

function SumOfOddAndEvenNum(num) {
  const evenSum = num
    .filter((Item) => Item % 2 === 0)
    .reduce((acc, char) => acc + char, 0);
  const oddSum = num
    .filter((Item) => Math.abs(Item % 2) === 1)
    .reduce((acc, char) => acc + char, 0);
  return [evenSum, oddSum];
}

console.log(SumOfOddAndEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
