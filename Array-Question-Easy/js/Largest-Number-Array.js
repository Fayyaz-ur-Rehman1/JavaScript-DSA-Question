// Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(array) {
    // let sortReverse = array.sort((a, b) => b - a)
    // return sortReverse[0];

    // return Math.max(...array);

    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(findLargestNum([4, 5, 1, 3])); //  5
console.log(findLargestNum([300, 200, 600, 150])); //  600
console.log(findLargestNum([1000, 1001, 857, 1])); //  1001