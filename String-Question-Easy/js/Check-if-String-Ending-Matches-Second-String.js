// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(strFirst, strSecond) {
    // loop
    let len1 = strFirst.length;
    let len2 = strSecond.length;
    if (len2 > len1) return false;

    for (let i = 0; i < len2; i++) {
        if (strFirst[len1 - len2 + i] !== strSecond[i]) {
            return false;
        }
    }
    return true;


    // method
    //   return strFirst.endsWith(strSecond)
}

console.log(checkEnding("abc", "bc")); // true
console.log(checkEnding("abc", "d")); // false
console.log(checkEnding("samurai", "zi")); // false
console.log(checkEnding("feminine", "nine")); // true
console.log(checkEnding("convention", "tio")); // false