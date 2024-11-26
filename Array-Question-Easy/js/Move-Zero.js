// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let nonZeros = [];
    let zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZeros.push(arr[i]);
        }
    }
    return [...nonZeros, ...zeros];

    // method
    // const zeros = arr.filter(elm => elm === 0)
    // const nonZeros = arr.filter(elm => elm !== 0)
    // return [...nonZeros, ...zeros]

    // const nonZeros = arr.filter(elm => elm !== 0)
    // const zeros = Array(arr.length - nonZeros.length).fill(0)
    // return nonZeros.concat(zeros)
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])); // [1, 1, 2, 1, 3, 0, 0]
console.log(moveZeros([0, 1, null, 2, false, 1, 0])); // [1, null, 2, false, 1, 0, 0]
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])); // ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]