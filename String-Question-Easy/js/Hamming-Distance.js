// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

function hammingDistance(String1, String2) {
    // loop
    // if (String1.length !== String2.length) {
    //     throw new Error("Strings must be of the same length to compute Hamming distance.");
    // }
    // let distance = 0;
    // for (let i = 0; i < String1.length; i++) {
    //     if (String1[i] !== String2[i]) {
    //         distance++
    //     }
    // }
    // return distance;

    // method
    if (String1.length !== String2.length) {
        throw new Error("Strings must be of the same length to compute Hamming distance.");
    }
    return String1
        .split("")
        .reduce((distance, char, index) => (char !== String2[index] ? distance + 1 : distance), 0);
}

console.log(hammingDistance("abcde", "bcdef")); // ➞ 5
console.log(hammingDistance("abcde", "abcde")); // ➞ 0
console.log(hammingDistance("strong", "strung")); // ➞ 1
