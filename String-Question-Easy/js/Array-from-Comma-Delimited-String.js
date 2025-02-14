// Write a function that turns a comma-delimited list into an array of strings.

function toArray(strings) {
    if (strings === "") {
        return []
    }
    return strings.split(" ")

    // return strings ? strings.split(", ").map(str => str.trim()) : [];
}

console.log(toArray("watermelon, raspberry, orange")); // ["watermelon", "raspberry", "orange"]
console.log(toArray("x1, x2, x3, x4, x5")); // ["x1", "x2", "x3", "x4", "x5"]
console.log(toArray("a, b, c, d")); // ["a", "b", "c", "d"]
console.log(toArray("")); // []