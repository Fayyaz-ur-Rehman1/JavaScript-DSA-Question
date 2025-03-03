// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
    // if (n % 5 == 0) {
    //     return true
    // }
    // return false

    return n % 5 === 0 ? true : false
}

console.log(divisibleByFive(5)); //➞ true
console.log(divisibleByFive(-55)); // ➞ true
console.log(divisibleByFive(37)); //➞ false