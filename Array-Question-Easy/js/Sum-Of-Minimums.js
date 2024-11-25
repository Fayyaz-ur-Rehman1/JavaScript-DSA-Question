// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

function sumMinimums(arr) {
    // // loops
    // let total = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let min = +Infinity;
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] < min) {
    //             min = arr[i][j]
    //         }
    //     }
    //     total += min;
    // }
    // return total;

    // method
    // let total = arr.map(elm => Math.min(...elm)).reduce((a, b) => a + b, 0);
    // return total;

    return arr.flatMap(subArray => [Math.min(...subArray)]).reduce((sum, min) => sum + min, 0);
}

console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]));  // 26

console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9]
]));  // 6

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20