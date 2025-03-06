// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]

function firstAndLast(str) {
    // let first = str.split("").sort().join("");
    // let last = str.split("").sort().reverse().join("");
    // return [first , last]

    let firstArr = str.split('');
    for (let i = 0; i < firstArr.length - 1; i++) {
        for (let j = i + 1; j < firstArr.length; j++) {
            if (firstArr[i] > firstArr[j]) {
                [firstArr[i], firstArr[j]] = [firstArr[j], firstArr[i]];
            }
        }
    }
    let first = firstArr.join('');

    let lastArr = str.split('');
    for (let i = 0; i < lastArr.length - 1; i++) {
        for (let j = i + 1; j < lastArr.length; j++) {
            if (lastArr[i] < lastArr[j]) {
                [lastArr[i], lastArr[j]] = [lastArr[j], lastArr[i]];
            }
        }
    }
    let last = lastArr.join('');

    return [first, last];
}


console.log(firstAndLast("marmite")); // ➞ ["aeimmrt", "trmmiea"]
console.log(firstAndLast("bench")); // ➞ ["bcehn", "nhecb"]
console.log(firstAndLast("scoop")); // ➞ ["coops", "spooc"]