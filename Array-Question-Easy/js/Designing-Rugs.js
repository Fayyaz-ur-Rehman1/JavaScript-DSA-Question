// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.



function makeRug(m, n, proc = "#") {
    // forloop
    let result = [];
    for (let i = 0; i < m; i++) {
        let pattern = ""
        for (let j = 0; j < n; j++) {
            pattern += proc
        }
        result.push(pattern)
    }
    return result

    // methods
    // return Array(m).fill("").map(() => proc.repeat(n))
    // return Array.from({ length: m }, () => proc.repeat(n))
}


console.log(makeRug(3, 5)); // [
//   "#####",
//   "#####",
//   "#####"
// ]
console.log(makeRug(3, 5, '$')); // [
// "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]
console.log(makeRug(2, 2, 'A')); // [
//   "AA",
//   "AA"
// ];