// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.


function evenLast(array) {
    // loop
    // if (array.length === 0) return 0;
    // let totalSum = 0;
    // let lastElement = array[array.length - 1];
    // for (let i = 0; i < array.length; i++) {
    //     if (i % 2 === 0) {
    //         totalSum += array[i] * lastElement;
    //     }
    // }
    // return totalSum;


    if (array.length === 0) return 0;
    let sum = 0;
    const lastElement = array[array.length - 1];
    for (let i = 0; i < array.length; i += 2) {
        sum += array[i] * lastElement;
    }
    return sum;


    // method
    // let lastElement = array[array.length - 1];
    // return array.filter((_, i) => i % 2 === 0).reduce((acc, curr) => {
    //     acc += curr * lastElement;
    //     return acc
    // }, 0);
}

console.log(evenLast([2, 3, 4, 5])); // 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30
console.log(evenLast([1, 3, 3, 1, 10])); // 140
console.log(evenLast([])); // 0