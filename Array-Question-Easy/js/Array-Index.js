// Given an index and an array, return the value of the array with the given index.

function valueAt(arr, index) {
    for (let i = Math.floor(index); i < arr.length; i++) {
        return arr[i]
    }
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));// 6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));// 5
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); // 4