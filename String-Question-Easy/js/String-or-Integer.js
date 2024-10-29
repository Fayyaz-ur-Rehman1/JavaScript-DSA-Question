// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.
function intOrString(checktype) {
    for (let i = 0; i < 1; i++) {
        if (typeof checktype === "number") return "int"
        if (typeof checktype === "string") return "str"
    }

    // if (typeof checktype === "number") return "int";
    // if (typeof checktype === "string") return "str";
}

console.log(intOrString(8)); // "int"
console.log(intOrString("Hello")); // "str"
console.log(intOrString(9843532)); // "int"
