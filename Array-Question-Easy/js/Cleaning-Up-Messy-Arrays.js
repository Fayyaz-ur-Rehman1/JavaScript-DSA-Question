// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(array) {

    // let evenArr = array.filter(e => e % 2 === 0);
    // let oddArr = array.filter(e => e % 2 !== 0);
    // return [evenArr, oddArr]


    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);

        if (num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num);
        }
    }

    return [evenArr, oddArr];
}

console.log(cleanUpArray(["8"])); // [[8], []]
console.log(cleanUpArray(["11"])); // [[], [11]]
console.log(cleanUpArray(["7", "4", "8"]));  // [[4, 8], [7]]
console.log(cleanUpArray(["9", "4", "5", "8"]));  // [[4, 8], [9, 5]]
