// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

function evenOrOdd(arr) {
    // let sum = arr.reduce((acc, curr) => acc + curr, 0);
    // if (sum % 2 == 0) {
    //     return "even"
    // } else {
    //     return "odd"
    // }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum % 2 == 0) {
        return "even"
    }
    return "odd"
}

console.log(evenOrOdd([0])); // "even"
console.log(evenOrOdd([1])); // "odd"
console.log(evenOrOdd([])); // "even"
console.log(evenOrOdd([0, 1, 5])) // "even"