// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.


function largestNumbers(n, array) {
    let resultStore = [];

    for (let i = 0; i < n; i++) {
        let max = -Infinity;
        let maxIndex = -1;
        for (let j = 0; j < array.length; j++) {
            if (max < array[j]) {
                max = array[j]
                maxIndex = j
            }
        }
        if (maxIndex !== -1) {
            resultStore.push(max)
            array[maxIndex] = -Infinity
        }
    }
    return resultStore
}

// Example usage:
console.log(largestNumbers(2, [4, 3, 2, 1])); // Output: [4, 3]
console.log(largestNumbers(1, [7, 19, 4, 2])); // Output: [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); // Output: [57, 18, 16]
console.log(largestNumbers(0, [1, 3, 4, 2])); // Output: []


