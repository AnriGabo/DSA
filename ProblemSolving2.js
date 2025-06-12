// Hitting the jackpot

// შექმენით ფუნქცია რომელიც იღებს მასივს

// Task:Finding Nemo

// input string of words

// word transform,join,split,includes,ternerul logic


function findNemo(nemo){
    const checkNemoExistOrNo = nemo.includes("Nemo");
    if(checkNemoExistOrNo === true){
                                                //  index = 0, element 1,
       return [nemo].join().split(" ").indexOf("Nemo") + 1
    }else{
        return console.log("Nemo Does not exist")
    }
}
console.log(findNemo("Nemo I am finding",))
//output -->ვიპოვოთ უნდა სახელი Nemo, და დავაბრუნოთ უნდა i fount Nemo at და რომელ ორდერზეც იპოვე იმას დააბრუნებ
//თუვერ ვიპოვეთ ნემო მაშინ დააბრუნებს i can not find Nemo