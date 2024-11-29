// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23

function arraySum(array) {
    // loop
    // let square = 0;
    // let squareRoot = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 == 0) {
    //         square += array[i] * array[i];
    //     } else {
    //         squareRoot += Math.sqrt(array[i]);
    //     }
    // }
    // let sum = (square + squareRoot).toFixed(2)
    // return Number(sum);

    // let totalSum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 == 0) {
    //         totalSum += array[i] * array[i];
    //     } else {
    //         totalSum += Math.sqrt(array[i]);
    //     }
    // }
    // return Number(totalSum.toFixed(2));


    // method
    // return array.map((elm) => {
    //     if (elm % 2 === 0) {
    //         return elm * elm
    //     } else {
    //         return Math.sqrt(elm)
    //     }
    // }).reduce((a, b) => a + b, 0).toFixed(2) * 1

    let evenNumbers = array.filter(num => num % 2 === 0).map(num => num ** 2);
    let oddNumbers = array.filter(num => num % 2 !== 0).map(num => Math.sqrt(num));
    let transformed = evenNumbers.concat(oddNumbers);
    let sum = transformed.reduce((acc, curr) => acc + curr, 0);
    return Number(sum.toFixed(2))

}

console.log(arraySum([1, 3, 3, 1, 10])); // 105.46
console.log(arraySum([2, 3, 4, 5])); // 23.97
console.log(arraySum([1, 31, 3, 11, 0])); // 11.62