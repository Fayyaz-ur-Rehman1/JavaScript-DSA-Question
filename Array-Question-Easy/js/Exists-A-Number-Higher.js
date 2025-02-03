// Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
    // if (arr == []) {
    //     return false
    // }
    // let sortValue = arr.sort((a, b) => b - a)
    // for (let i = 0; i < sortValue.length; i++) {
    //     if (sortValue[i] >= n) {
    //         return true
    //     }
    // }
    // return false;

    // method
    // return arr.some(num => num >= n);
    // return arr.filter(num => num >= n).length > 0;
    return Math.max(...arr) >= n;
}

console.log(existsHigher([5, 3, 15, 22, 4], 10)); // true
console.log(existsHigher([1, 2, 3, 4, 5], 8)); // false
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)); // true
console.log(existsHigher([], 5)); // false