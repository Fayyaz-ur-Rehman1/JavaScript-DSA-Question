// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.


function unlucky13(array) {
    // loop
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 13 !== 0) {
    //         result.push(array[i]);
    //     }
    // }
    // return result;

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 13 === 0) {
    //         array.splice(i, 1);
    //         i--; 
    //     }
    // }
    // return array;

    // method
    // return array.filter(elm => elm % 13 !== 0);
    // return array
    //     .map(elm => (elm % 13 === 0 ? null : elm))
    //     .filter(elm => elm !== null);

    return array
        .map(elm => (elm % 13 === 0 ? [] : [elm]))
        .flat();
}

console.log(unlucky13([53, 182, 435, 591, 637]));// [53, 435, 591]
// 182 and 637 are divisible by 13.
console.log(unlucky13([24, 316, 393, 458, 1279]));// [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
console.log(unlucky13([104, 351, 455, 806, 871]));// []
// All numbers in the array are divisible by 13.