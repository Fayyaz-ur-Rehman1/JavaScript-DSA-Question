// Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(array) {
    // let min = array[0];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] < min) {
    //         min = array[i];
    //     }
    // }
    // return min;

    let smallest = Math.min(...array);
    return smallest;
}

console.log(findSmallestNum([34, 15, 88, 2]));  // 2
console.log(findSmallestNum([34, -345, -1, 100]));  // -345
console.log(findSmallestNum([-76, 1.345, 1, 0]));  // -76
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));  // -0.9999
console.log(findSmallestNum([7, 7, 7])); // 7