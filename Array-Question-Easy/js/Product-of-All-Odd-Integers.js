// Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
    // let product = 1;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 !== 0) {
    //         product *= arr[i];
    //     }
    // }
    // return product

    return arr
        .filter(num => num % 2 !== 0)
        .reduce((acc, curr) => acc * curr, 1) || 0;
}

console.log(oddProduct([3, 4, 1, 1, 5])); // 15
console.log(oddProduct([5, 5, 8, 2, 4, 32])); // 25
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])); // 1