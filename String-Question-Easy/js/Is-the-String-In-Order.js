// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(string) {
    // loop
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] > string[i + 1]) {
            return false
        }
    }
    return true

    // method
    // return string === string.split("").sort().join("")
}

console.log(isInOrder("abc")); // ➞ true
console.log(isInOrder("edabit")); // ➞ false
console.log(isInOrder("123")); // ➞ true
console.log(isInOrder("xyzz")); // ➞ true