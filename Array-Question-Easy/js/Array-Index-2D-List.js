// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

// arr = [
//     ["m", "u", "b"],
//     ["a", "s", "h"],
//     ["i", "r", "1"]
//   ]

//   idx = [1, 3, 5, 8]

// You have to find the characters in these indexes of the given list if you think of the indexes as:

// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]

// arrIndex(lst, idx) ➞ "mbsr"

function arrIndex(arr, idx) {

    // loop
    const flattened = arr.flat();

    let result = "";

    for (let i = 0; i < idx.length; i++) {

        const char = flattened[idx[i] - 1];

        result += char;
    }

    return result;

    // method
    // const flattened = arr.flat();
    // const result = idx.map(i => flattened[i - 1])

    // return result;
}

// Test cases
const arr = [
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
];

const idx = [1, 3, 5, 8];

console.log(arrIndex(arr, idx)); // Output: "mbsr"
