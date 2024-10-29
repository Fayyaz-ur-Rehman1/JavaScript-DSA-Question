// Create a function that returns the last value of the last item in an array or string.

function lastItem(array) {
    let lastItem = "";
    for (let i = array.length - 1; i < array.length; i++) {
        lastItem += array[i];
    }
    return lastItem
}

console.log(lastItem([0, 4, 19, 34, 50, -9, 2])); // 2
console.log(lastItem("The quick brown fox jumped over the lazy dog")); // "g"
console.log(lastItem([])); // undefined