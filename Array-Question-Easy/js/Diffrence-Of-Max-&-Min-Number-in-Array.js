// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(array) {
    // let max = Math.max(...array);
    // let min = Math.min(...array);
    // return max - min;

    let max = array.reduce((a, b) => (a > b ? a : b));
    let min = array.reduce((a, b) => (a < b ? a : b));
    return max - min;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // 82// Smallest number is -50, biggest is 32.
console.log(diffMaxMin([44, 32, 86, 19])); // 67// Smallest number is 19, biggest is 86.