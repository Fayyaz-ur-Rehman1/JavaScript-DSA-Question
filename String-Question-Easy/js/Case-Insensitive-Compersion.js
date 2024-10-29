// Write a function that validates whether two strings are identical. Make it case insensitive.

function match(str1, str2) {
    // return str1.toLowerCase() === str2.toLowerCase();

    // if (str1.length !== str2.length) {
    //     return false;
    // }else {
    //     return true
    // }

    for (let i = 0; i < str1.length; i++) {
        if (str1.toLowerCase() === str2.toLowerCase()) {
            return true;
        }
    }
    return false;

}

console.log(match("hello", "hELLo")); // true
console.log(match("motive", "emotive")); // false
console.log(match("venom", "VENOM")); // true
console.log(match("mask", "mAskinG")); // false