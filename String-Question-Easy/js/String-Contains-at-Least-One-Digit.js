// Write a regular expression that matches a string if it contains at least one digit.


function containsDigit(str) {
    return /\d/.test(str);
}

console.log(containsDigit("c8"));       // ➞ true
console.log(containsDigit("23cc4"));    // ➞ true
console.log(containsDigit("abwekz"));   // ➞ false
console.log(containsDigit("sdfkxi"));   // ➞ false