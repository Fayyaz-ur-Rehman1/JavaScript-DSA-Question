// Create a function that returns the ASCII value of the passed in character.

function ctoa(str) {
    // return str.codePointAt()
    // return str.charCodeAt()

    for (let i = 0; i < str.length; i++) {
        return `ASCII value of '${str[i]}' is: ${str.charCodeAt(i)}`;
    }
}
// let a = "a"
// a.
console.log(ctoa("A")); // 65
console.log(ctoa("m")); // 109
console.log(ctoa("[")); // 91
console.log(ctoa("/")); // 47
