// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(array) {
    // forloop
    // let even = [];
    // let odd = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         even.push(Number(array[i]));
    //     } else {
    //         odd.push(Number(array[i]));
    //     }
    // }
    // return [even, odd];

    // method
    let elementNum = array.map(elm => Number(elm));
    let even = elementNum.filter(elm => Number(elm) % 2 === 0); // Convert string to number and check for even
    let odd = elementNum.filter(elm => Number(elm) % 2 !== 0); // Convert string to number and check for odd
    return [even, odd];
}
console.log(cleanUpArray(["8"])); // [[8], []]
console.log(cleanUpArray(["11"])); // [[], [11]]
console.log(cleanUpArray(["7", "4", "8"]));  // [[4, 8], [7]]
console.log(cleanUpArray(["9", "4", "5", "8"]));  // [[4, 8], [9, 5]]
