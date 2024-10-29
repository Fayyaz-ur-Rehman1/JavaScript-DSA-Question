// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.

function drop(arr, start) {
    let resultStore = [];
    for (let i = start; i < arr.length; i++) {
        resultStore.push(arr[i])
    }
    return resultStore;
}

console.log(drop([1, 2, 3], 1));// [2, 3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 5)); // []
console.log(drop([1, 2, 3], 0)); // [1, 2, 3]


function drop(arr, start) {
    let resultStore = []; 
    
    for (let i = start, j = 0; i < arr.length; i++, j++) {
        resultStore[j] = arr[i]; 
    }

    return resultStore;
}

console.log(drop([1, 2, 3], 1)); // [2, 3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 5)); // []
console.log(drop([1, 2, 3], 0)); // [1, 2, 3]
