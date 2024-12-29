// Create a function that takes an array of numbers and returns only the even values.
// Return all even numbers in the order they were given.
// All test cases contain valid numbers ranging from 1 to 3000.

function noOdds(array) {
    // loop
    // let evenNumArr = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         evenNumArr.push(array[i]);
    //     }
    // }
    // return evenNumArr;

    //    method
    return array.filter(num => num % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])); // [2, 4, 6, 8]
console.log(noOdds([43, 65, 23, 89, 53, 9, 6])); // [6]
console.log(noOdds([718, 991, 449, 644, 380, 440])); // [718, 644, 380, 440]