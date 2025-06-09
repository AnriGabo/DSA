// Input --> string and number
// processing
// Output --> string



// -->Input არის რამოდენიმე დამოუკიდებელი მასივი რომელიც უნდა გადაკონვერტირდეს ერთ მასივად

// function concat(...args){
    
//     console.log(args.length);
//     const emptyArray = [];

//     for (var i = 0; i < args.length;i++){
//         emptyArray.push(...args[i])
//     }
//     return emptyArray;
// }

// console.log(concat([1],[2],[3],[4],[5],[6],[7]))


function concat(...args){
    // ....args არის spread ოეპრატორი რომელიც რამოდენიმე მასივს ყველას აერთიანებს და აქცევს 1 მასივად
    return args.flat(Infinity);
}

console.log(concat([1],[2],[3],[4],[5],[6]))
//-->Output მასივი რომელშიც გაერთიანებულია ყველა დამოკიდებელი მასივი ერთ მთლიან მასივად