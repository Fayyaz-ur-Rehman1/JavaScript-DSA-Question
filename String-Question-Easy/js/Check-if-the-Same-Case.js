// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(string) {
    // let isLower = true;
    // let isUpper = true;

    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] !== string[i].toLowerCase()) {
    //         isLower = false;
    //     }
    //     if (string[i] !== string[i].toUpperCase()) {
    //         isUpper = false;
    //     }
    // }

    // return isLower || isUpper;


    // return string === string.toLowerCase() || string === string.toUpperCase();

    const lowerArray = string.split('').filter(c => c === c.toLowerCase());
    const upperArray = string.split('').filter(c => c === c.toUpperCase());

    return lowerArray.length === string.length || upperArray.length === string.length;

}

console.log(sameCase("hello")); // ➞ true
console.log(sameCase("HELLO")); // ➞ true
console.log(sameCase("Hello")); // ➞ false
console.log(sameCase("ketcHUp")); // ➞ false
