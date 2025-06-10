// Input --> string and number
// processing
// Output --> string

// ->input : 1 0 ების ნაკრები, 1 = true, 0 = false;

function integerBoolean(integer) {
  return integer.split("").map((Item) => Number(Item) === 1 ? true : false)
}

console.log(integerBoolean("1010101010101"));

// -->output: boolean
