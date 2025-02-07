// Create a function that filters out an array to include numbers that only have a certain number of digits.

function filterDigitLength(array, num) {
    // loop
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].toString().length === num) {
    //         result.push(array[i]);
    //     }
    // }
    // return result;

    // method
    // return array.filter(n => n.toString().length === num);

    // return array.reduce((acc, curr) => {
    //     if (curr.toString().length === num) {
    //         acc.push(curr);
    //     }
    //     return acc;
    // }, []);

    let result = [];
    array.map(n => {
        if (n.toString().length === num) {
            result.push(n);
        }
    });
    return result;


}

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); //➞ [232, 555]// Include only numbers with 3 digits.
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)); //➞ [2, 7, 8, 9]// Include only numbers with 1 digit.
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)); //➞ []// No numbers with only 1 digit exist => return empty array.
console.log(filterDigitLength([5, 6, 8, 9], 1)); //➞ [5, 6, 8, 9]// All numbers in the array have 1 digit only => return original array.