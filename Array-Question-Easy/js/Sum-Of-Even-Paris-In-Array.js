// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]


function oddSum(array) {
    // loop
    // let result = [];
    // for (let i = 0; i < array.length - 1; i++) {
    //     let sum = array[i] + array[i + 1];
    //     result.push(sum % 2 === 0);
    // }
    // return result;

    // method
    // return array.map(function (elm, i) {
    //     if (i < array.length - 1) {
    //         return (elm + array[i + 1]) % 2 === 0;
    //     }
    // }).filter(value => value !== undefined);

    // return array.slice(0, -1).map((elm, i) => (elm + array[i]) % 2 === 0)

    return array.reduce((result, elm, i) => {
        if (i < array.length - 1) {
            result.push((elm + array[i + 1]) % 2 === 0);
        }
        return result;
    }, []);
}

console.log(oddSum([11, 15, 6, 8, 9, 10])); // [true, false, true, false, false]
console.log(oddSum([12, 21, 5, 9, 65, 32])); // [false, true, true, true, false]
console.log(oddSum([1, 2, 3, 4, 5, 6])); // [false, false, false, false, false]