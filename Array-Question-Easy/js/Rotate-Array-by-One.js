// // // Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// // // Check the examples for a better understanding.

function rotateByOne(arr) {
    // if (arr == 0) return arr
    // let lastElm = arr.pop();
    // let resultStore = [];
    // for (let i = 0; i < arr.length; i++) {
    //     resultStore.push(arr[i])
    // }
    // return [lastElm, ...resultStore]

let lastElement = arr.pop(); // Remove the last element
    arr.unshift(lastElement); // Insert it at the beginning
    return arr;
}

console.log(rotateByOne([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotateByOne([6, 5, 8, 9, 7])); // [7, 6, 5, 8, 9]
console.log(rotateByOne([20, 15, 26, 8, 4])); // [4, 20, 15, 26, 8]


// function rotateByOne(arr) {
//     if (arr.length === 0) return arr; // If array is empty, return it
//     let lastElement = arr[arr.length - 1]; // Step 1: Store the last element
//     for (let i = arr.length - 1; i > 0; i--) { // Step 2: Shift elements to the right
//         arr[i] = arr[i - 1];
//         // console.log(arr[i]);
        
//     }
//     arr[0] = lastElement; // Step 3: Place the last element in the first position
//     return arr;
// }

// console.log(rotateByOne([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7])); // [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4])); // [4, 20, 15, 26, 8]
