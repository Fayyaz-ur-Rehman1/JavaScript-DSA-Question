// console.log(You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(array) {
    // let max = -Infinity;
    // let count = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //         count = 1;
    //     } else if (array[i] === max) {
    //         count++;
    //     }
    // }

    // return count;


    // method
    // let count = 0;
    // let max = Math.max(...array);
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === max) {
    //         count++
    //     }
    // }
    // return count

    // let count = 0;
    // let max = Math.max(...array);
    // return array.filter(elm => elm === max).length


}

console.log(birthdayCakeCandles([4, 4, 1, 3])); // 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.
console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])); // 4