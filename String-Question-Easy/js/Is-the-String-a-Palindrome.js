// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;

    // method
    // return str === str.split('').reverse().join('');

    // if (str.split("").reverse().join("") === str) {
    //     return true
    // }
    // return false


}

console.log(checkPalindrome("mom")); // ➞ true
console.log(checkPalindrome("scary")); // ➞ false
console.log(checkPalindrome("reviver")); // ➞ true
console.log(checkPalindrome("stressed")); // ➞ false
