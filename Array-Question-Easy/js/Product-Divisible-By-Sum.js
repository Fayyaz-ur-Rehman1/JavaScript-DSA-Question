// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

function divisible(array) {
    // loops
    // let sum = 0;
    // let product = 1;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    //     product *= array[i];
    // }
    // if (product % sum === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // method
    const sum = array.reduce((acc, num) => acc + num, 0);
    const product = array.reduce((acc, num) => acc * num, 1);
    return sum !== 0 && product % sum === 0;
}

console.log(divisible([3, 2, 4, 2])); // false
console.log(divisible([4, 2, 6])); // true
// 4 * 2 * 6 / (4 + 2 + 6)
console.log(divisible([3, 5, 1])); // false