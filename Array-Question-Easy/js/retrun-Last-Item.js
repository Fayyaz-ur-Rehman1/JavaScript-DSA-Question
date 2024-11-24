// Create a function that returns the last value of the last item in an array or string.

function lastItem(array) {
    for (let i = array.length - 1; i < array.length; i++) {
        return array[i]
    }

    // method
    // if (Array.isArray(array)) {
    //     return array[array.length - 1];
    // } else if (typeof array === "string") {
    //     return array[array.length - 1];
    // } else {
    //     return undefined;
    // }

    // if (Array.isArray(array) || typeof array === "string") {
    //     return array.slice(-1)[0];
    // } else {
    //     return undefined;
    // }

    //     if (array.length === 0) {
    //         return undefined;
    //     }
    //     return array[array.length - 1];
}

console.log(lastItem([0, 4, 19, 34, 50, -9, 2])); // 2
console.log(lastItem("The quick brown fox jumped over the lazy dog")); // "g"
console.log(lastItem([])); // undefined