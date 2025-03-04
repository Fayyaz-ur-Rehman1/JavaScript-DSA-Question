// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
    // return num % 100 === 0
    // return num % 100 === 0 ? true : false
    if (num % 100 === 0) {
        return true
    }
    return false
}
console.log(divisible(1)); // ➞ false
console.log(divisible(1000)); // ➞ true
console.log(divisible(100)); // ➞ true