// Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(array) {
    // loop
    // let max = -Infinity;
    // let min = +Infinity;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //     }
    //     if (array[i] < min) {
    //         min = array[i];
    //     }
    // }
    // return max - min;

    // method
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

console.log(difference([10, 15, 20, 2, 10, 6])); // 18// 20 - 2 = 18
console.log(difference([-3, 4, -9, -1, -2, 15])); // 24// 15 - (-9) = 24
console.log(difference([4, 17, 12, 2, 10, 2])); // 15