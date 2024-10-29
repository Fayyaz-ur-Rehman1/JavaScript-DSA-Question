// Write a function to check if an array contains a particular number.

function check(arr, numContain) {
    // return arr.includes(numContain)
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numContain) {
            return true
        }
    }
    return false
}

console.log(check([1, 2, 3, 4, 5], 3)); // true
console.log(check([1, 1, 2, 1, 1], 3)); // false
console.log(check([5, 5, 5, 6], 5)); // true
console.log(check([], 5)); // false