// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(str) {
    let spl = str.split("");
    let resultStore = [];
    for (let i = 0; i < spl.length; i++) {
        if (spl[i] === "1") {
            resultStore.push(true);
        } else {
            resultStore.push(false);
        }
    }
    return resultStore;

    // let spl = str.split("");
    // let resultStore = []
    // return spl.map(function (e) {
    //     if (e === "1") {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
}

console.log(integerBoolean("100101")); // [true, false, false, true, false, true]
console.log(integerBoolean("10")); // [true, false]
console.log(integerBoolean("001")); // [false, false, true]