// Input --> string and number
// processing
// Output --> string

// 2 decimal number
// Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.

// ორი მეათედი ციფრი რომელიც უნდა დაჯამდეს

function floatSum(a, b) {
    const multiplier = 10000;
    console.log(a * multiplier + b * multiplier);
    const multiple =  (a * multiplier + b * multiplier) / multiplier;
    return multiple;
}

console.log(floatSum(0.3, 0.6));

// Algorithm

// 1)შევადაროთ რომელსაქვს ყველაზე მეტი ათწილადი ციფრი
//  2)4 ციფრია წერილის შემდეგ და 10ს გავამრავლებთ 4 ჯერადი, 10 იქს 10 იქს 10 და იქს 10 = 10კ
// 3)ორივე ციფრი გავამრავლოთ უნდა 10კზე 1.234 x 10k, 4.3443 x 10k; become integer
// 4)დავუმატებთ ერთმანეთს
// 5)გავყოთ უნდა ისევ 10000ზე

// output
// A and B returns their sum

// math round, math floor, math abs
