// Transforming Words into Binary Strings

// input -- string word
// output:binary string

// letters from [a,m] equal to 0, and letters from [n,z] to 1;


function convertBinary(str){
    const AtoM = "ABCDEFGHIJKLM".toLowerCase();
    return str.split("").map((Item) => AtoM.includes(Item) ? 0 : 1).join("")
}

console.log(convertBinary("moon"))