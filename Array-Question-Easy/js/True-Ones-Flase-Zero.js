// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(int) {

    // forloop
    let spl = int.split("");
    let result = [];
    for (let i = 0; i < spl.length; i++) {
        if (spl[i] === "1") {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;

    // for (let i = 0; i < int.length; i++) {
    //     if (int[i] === "1") {
    //         result.push(true);
    //     } else {
    //         result.push(false);
    //     }
    // }
    // return result

    // method
    // let spl = int.split("");
    // return spl.map(elm => elm === "1");
    // return spl.reduce(function (acc, curr) {
    //     if (curr === "1") {
    //         acc.push(true)
    //     } else {
    //         acc.push(false)
    //     }
    //     return acc
    // }, [])
}

console.log(integerBoolean("100101")); // [true, false, false, true, false, true]
console.log(integerBoolean("10")); // [true, false]
console.log(integerBoolean("001")); // [false, false, true]