// Input --> string and number
// processing
// Output --> string



// Create a function that takes an array of numbers and returns the second largest number.


// -->numbers of array s
// processing -> sort, slice

const secondLargestNum = (num ) => {
    // long way 
    const sortingArray = num.sort((a,b) => b - a);
    const uniqueElement = [...new Set(sortingArray)][1]
    return uniqueElement
    
}
console.log(secondLargestNum([20,343,324,2,22,2323,2,3,2,30]))
// --> output 343
// -->output: second largest number
