// Write two functions:
// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.


function toInt(str) {
    // return Number(str);
    return parseInt(str)
}

function toStr(num) {
    // return String(num)
    return `${num}`
}
console.log(toInt("77")); // 77
console.log(toInt("532")); // 532
console.log(toStr(77)); // "77"
console.log(toStr(532)); // "532"