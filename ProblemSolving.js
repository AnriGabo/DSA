// Input --> string and number
// processing
// Output --> string

// ->input : 1 0 ების ნაკრები, 1 = true, 0 = false;

function integerBoolean(integer) {
  const modifyNum = [integer].join("").split("");
  const mapingElement = modifyNum.map((Item) => Number(Item));
  const compare = mapingElement.map((Itemiko) =>
    Itemiko === 1 ? true : false
  );
  return compare;
}

console.log(integerBoolean("1010101010101"));

// -->output: boolean
