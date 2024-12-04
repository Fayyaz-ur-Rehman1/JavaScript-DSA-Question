// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.
// Examples

function longestString(str1, str2) {
    let combined = str1 + str2;
    let arrayDistinctVlaue = new Set(combined);
    let sortArrayValue = Array.from(arrayDistinctVlaue).sort();
    return sortArrayValue.join("");
}

let str1 = "mubashir"
let str2 = "edabit"

console.log(longestString(str1, str2)); // "abdehimrstu"
// Contains sorted and distinct letters of the given strings.
str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"
console.log(longestString(str1, str2)); // "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.