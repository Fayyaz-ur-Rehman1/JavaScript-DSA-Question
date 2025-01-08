// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

function isBetween(first, last, word) {
    // return word > first && word < last;

    const words = [first, word, last];
    const sortedWords = words.slice().sort();
    return sortedWords[1] === word;
}

console.log(isBetween("apple", "banana", "azure"));  // true
console.log(isBetween("monk", "monument", "monkey"));  // true
console.log(isBetween("bookend", "boolean", "boost"));  // false