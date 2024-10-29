// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
    // return arr.reduce((a, b) => a + b, 0);

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum

    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum
}

console.log(getSumOfItems([2, 7, 4])); //➞ 13
console.log(getSumOfItems([45, 3, 0])); //➞ 48
console.log(getSumOfItems([-2, 84, 23])); //➞ 105