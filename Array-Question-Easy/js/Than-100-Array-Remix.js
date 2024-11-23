// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.


function arrayLessThan100(array) {
    // // loop
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i]
    // }
    // if (sum < 100) {
    //     return true
    // }
    // return false

    // method
    // let total = array.reduce((a, b) => a + b, 0);
    // return total < 100;

    let total = 0;
    // return array.every((num) => {
    //     total += num
    //     return total < 100;
    // })

    let isLessThan100 = !array.some((num) => {
        total += num;
        return total >= 100
    })
    return isLessThan100;
}

console.log(arrayLessThan100([5, 57])); // true
console.log(arrayLessThan100([77, 30])); // false
console.log(arrayLessThan100([0])); // true