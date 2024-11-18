// Create a function that returns an array of all the integers between two given numbers start and end.

function rangeOfNum(start, end) {
    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(i);
    }
    return result;

    // return Array.from({ length: end - start - 1 }, (_, i) => start + i + 1);
}

console.log(rangeOfNum(2, 4));  // [3]
console.log(rangeOfNum(5, 9));  // [6, 7, 8]
console.log(rangeOfNum(2, 11));  // [3, 4, 5, 6, 7, 8, 9, 10]