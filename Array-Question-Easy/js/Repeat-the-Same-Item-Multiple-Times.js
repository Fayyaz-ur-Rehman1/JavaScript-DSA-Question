// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(item);
    }
    return result;

    // method
    // return Array(times).fill(item)
    // return Array.from({length : times} , () => item);
}

console.log(repeat("edabit", 3)); // ["edabit", "edabit", "edabit"]
console.log(repeat(13, 5)); // [13, 13, 13, 13, 13]
console.log(repeat("7", 2)); // ["7", "7"]
console.log(repeat(0, 0)); // []