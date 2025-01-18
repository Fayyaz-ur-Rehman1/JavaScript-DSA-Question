// Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(array) {

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max - min;


    // let min = Math.min(...array)
    // let max = Math.max(...array)
    // return max - min
}

console.log(difference([10, 15, 20, 2, 10, 6])); // 18 // 20 - 2 = 18
console.log(difference([-3, 4, -9, -1, -2, 15])); // 24// 15 - (-9) = 24
console.log(difference([4, 17, 12, 2, 10, 2])); // 15