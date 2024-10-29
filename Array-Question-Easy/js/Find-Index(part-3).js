// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.


function search(arr, searchIndex) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === searchIndex) {
    //         return i
    //     }
    // }
    // return -1

    return arr.findIndex(e => e == searchIndex)
}

console.log(search([1, 2, 3, 4], 3)); // 2
console.log(search([2, 4, 6, 8, 10], 8)); // 3
console.log(search([1, 3, 5, 7, 9], 11)); // -1