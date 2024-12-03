// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.
// Examples

function arithmeticProgression(first, diff, n) {
    // loop
    // let result = [];
    // for (let i = first; i <= n; i++) {
    //     result.push(first);
    //     first += diff
    // }
    // return result.join(",");

    // let sequence = [];
    // for (let i = 0; i < n; i++) {
    //     sequence.push(first + i * diff);
    // }
    // return sequence.join(", ");

    // let str = "";
    // for (let i = 0; i < n - 1; i++) {
    //     let temp = 0;
    //     if (i <= 0) {
    //         str += first;
    //     }
    //     temp = first += diff;
    //     str += temp;
    // }
    // return str;

    // method
    return Array.from({ length: n }, (_, i) => first + i * diff).join(", ");

}

console.log(arithmeticProgression(1, 2, 5)); // "1, 3, 5, 7, 9"
console.log(arithmeticProgression(1, 0, 5)); // "1, 1, 1, 1, 1"
console.log(arithmeticProgression(1, -3, 10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"