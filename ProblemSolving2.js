function filteredArray(arr, elem) {
  let newArr = [];
  for(var i = 0; i < arr.length; i++){

    // თუ მასივი არ შეიცავს ელემენტს
    if(!arr[i].includes(elem)){
        newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    // SubArray, ..[arr[i]]
    // მასივი რომელიც შეიცავს 3 ს არდაააბრუნოს, ამ შემთხვევაში ცარიელი მასივი უნდა დაბრუნდეს
    [
      [1,1,1],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    1
  )
);

// Includes
// თუ ეს მასივი არ შეიცავს 3-ს,დააბრუნსო ელემენტები