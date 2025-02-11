// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(factors, num) {
    // loop
    // for (let i = 0; i < factors.length; i++) {
    //     if (num % factors[i] !== 0) {
    //         return true
    //     }
    // }
    // method
    return factors.every(factor => num % factor === 0);
    // return false
    // return factors.reduce((isFactor, factor) => isFactor && (num % factor === 0), true);
    // return factors.filter(factor => num % factor !== 0).length === 0;
    // return !factors.some(factor => num % factor !== 0);
}

console.log(checkFactors([2, 3, 4], 12)); // ➞ true// Since 2, 3, and 4 are all factors of 12.
console.log(checkFactors([1, 2, 3, 8], 12)); // ➞ false// 8 is not a factor of 12.
console.log(checkFactors([1, 2, 50], 100)); // ➞ true
console.log(checkFactors([3, 6], 9)); // ➞ false