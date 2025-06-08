// Input --> string and number
// processing
// Output --> string


//Medium Level Array task

// -- create a function which return the number of true values there are in an array;

// -->input, array of boolean
// processing --> filter method

// -->output: count how much true is this

const countTrue  = (bool) => bool.filter((item) => item === true).length;


console.log(countTrue([false,false,false,true,true]))