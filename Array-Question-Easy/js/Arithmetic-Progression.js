// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.


function arithmeticProgression(first, diff, n) {
    // let str = "";
    // for (let i = 0; i < n; i++) {
    //     str += first + diff * i + ","
    // }
    // return str

    // const sequence = Array.from({ length: n }, (_, i) => first + i * diff);
    // return sequence.join(", ");


    return [...Array(n)]
        .map((_, i) => first + i * diff)
        .join(", ");
}

// Examples
console.log(arithmeticProgression(1, 2, 5)); // "1, 3, 5, 7, 9"
console.log(arithmeticProgression(1, 0, 5)); // "1, 1, 1, 1, 1"
console.log(arithmeticProgression(1, -3, 10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"