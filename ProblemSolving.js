// Input --> string and number
// processing
// Output --> string


// -->Input მასივები უნდა გვქონდეს თარიღის ფორმატში,დეკემბერი 23 და ესე, და მეორე ინფათი თვე, და გადავამოწმოთ უნდა
// ამ თვეში რამდენჯერ დაიდო ვიდეო, მეორე არგუემნტის მიხედვით უნდა გადამოწმდეს


const uploadCount = (dates,day) =>{
    const filterElement = dates.filter((Item) => Item.includes(day))
    return filterElement.length;
}

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"))


// -->Output how many times number format