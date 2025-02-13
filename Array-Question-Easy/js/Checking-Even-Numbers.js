// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0)
}
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

console.log(checkAllEven([1, 2, 3, 4])); // false
console.log(checkAllEven([2, 4, 6])); // true
console.log(checkAllEven([5, 6, 8, 10])); // false
console.log(checkAllEven([-2, 2, -2, 2])); // true