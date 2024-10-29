// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.


function arrayLessThan100(array) {
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i]
    // }
    // if (sum < 100) {
    //     return true
    // }
    // return false

    let sum = array.reduce((a, b) => a + b, 0)

    if (sum < 100) {
        return true
    }
    return false

}

console.log(arrayLessThan100([5, 57])); // true
console.log(arrayLessThan100([77, 30])); // false
console.log(arrayLessThan100([0])); // true