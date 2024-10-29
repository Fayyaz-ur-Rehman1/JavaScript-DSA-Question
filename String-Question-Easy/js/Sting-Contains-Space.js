// Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
    // return str.includes(" ");
    // return str.indexOf(" ") !== -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            return true
        }
    }
    return false
}

console.log(hasSpaces("hello")); // false
console.log(hasSpaces("hello, world")); // true
console.log(hasSpaces(" ")); // true
console.log(hasSpaces("")) // false
console.log(hasSpaces(",./!@#")); // false