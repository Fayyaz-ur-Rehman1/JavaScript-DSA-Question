// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.


// Converts an integer to a string
function intToString(num) {
    return String(num);
    //   return num + "";
}

// Converts a string to an integer
function stringToInt(str) {
    return Number(str);
    //   return parseInt(str);
}
console.log(intToString(4));       // "4"
console.log(stringToInt("4"));     // 4
console.log(intToString(29348));   // "29348"
console.log(stringToInt("29348")); // 29348
