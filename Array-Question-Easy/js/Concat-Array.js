// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
    // return arr1.concat(arr2)
    // return [...arr1 , ...arr2]

    let resultStore = [];
    for (let i = 0; i < arr1.length; i++) {
        resultStore.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        resultStore.push(arr2[j])
    }
    return resultStore
}
console.log(concat([1, 3, 5], [2, 6, 8])); // [1, 3, 5, 2, 6, 8]
console.log(concat([7, 8], [10, 9, 1, 1, 2])); // [7, 8, 10, 9, 1, 1, 2]
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); // [4, 5, 1, 3, 3, 3, 3, 3]