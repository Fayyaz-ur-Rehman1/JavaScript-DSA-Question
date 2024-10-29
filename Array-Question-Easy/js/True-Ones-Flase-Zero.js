// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(int) {
    let spl = int.split("")
    // return spl.map(function (e) {
    //     if (e === "1") {
    //         return true
    //     }
    //     return false
    // })

    return spl.reduce(function (accu, curr) {
        if (curr === "1") {
            accu.push(true)
        } else {
            accu.push(false)
        }
        return accu

    }, [])

    // let resultStore = []
    // for (let i = 0; i < int.length; i++) {
    //     if (int[i] === "1") {
    //         resultStore.push(true)
    //     } else {
    //         resultStore.push(false)
    //     }
    // }
    // return resultStore
}

console.log(integerBoolean("100101")); // [true, false, false, true, false, true]
console.log(integerBoolean("10")); // [true, false]
console.log(integerBoolean("001")); // [false, false, true]