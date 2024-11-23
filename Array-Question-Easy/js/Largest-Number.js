// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.


function largestNumbers(n, array) {
    // loops
    if (n <= 0) return [];
    let result = [];

    for (let i = 0; i < n; i++) {
        let max = -Infinity;

        for (let j = 0; j < array.length; j++) {
            if (!result.includes(array[j]) && array[j] > max) {
                max = array[j];
            }
        }
        result.push(max);
    }

    return result;

    // method
    // let sortedArray = [...array].sort((a, b) => b - a);
    // return sortedArray.slice(0, n);
}

// Example usage:
console.log(largestNumbers(2, [4, 3, 2, 1])); // Output: [4, 3]
console.log(largestNumbers(1, [7, 19, 4, 2])); // Output: [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); // Output: [57, 18, 16]
console.log(largestNumbers(0, [1, 3, 4, 2])); // Output: []