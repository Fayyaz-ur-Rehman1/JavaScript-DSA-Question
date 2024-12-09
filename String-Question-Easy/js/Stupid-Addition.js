// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

function stupidAddition(a, b) {
    // if (typeof a === "number" && typeof b === "number") {
    //     return `${a}${b}`;
    // } else if (typeof a === "string" && typeof b === "string") {
    //     return a * 1 + b * 1;
    // } else {
    //     return null;
    // }

    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    } else if (typeof a === "number" && typeof b === "number") {
        return a.toString() + b.toString();
    } else {
        return null;
    }
}

console.log(stupidAddition(1, 2)); // "12"
console.log(stupidAddition("1", "2")); // 3
console.log(stupidAddition("1", 2)); // null