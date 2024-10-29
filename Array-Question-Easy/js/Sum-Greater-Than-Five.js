// Write a function that returns the sum of elements greater than 5, in the given array .

function sumFive(arr) {
    return arr.map(e => e > 5 ? e : 0).reduce((a, b) => a + b, 0)

    // return arr.filter(elm => elm > 5).reduce((a, b) => a + b, 0)

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 5) {
    //         sum += arr[i]
    //     }
    // }
    // return sum
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18])); // 77
console.log(sumFive([1, 2, 3, 4])); // 0
console.log(sumFive([10, 12, 28, 47, 55, 100])); // 252