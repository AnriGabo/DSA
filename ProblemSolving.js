// Input --> string and number
// processing
// Output --> string

// input array, output: dublicate array

const clone = (arg) => {
    const cloning = [...arg, ...arg]
    return cloning;
}

console.log(clone([1,2,3]))