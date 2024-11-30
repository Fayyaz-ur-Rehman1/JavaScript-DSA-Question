// Create a function that returns the original value from a matrix with too many sub-arrays.

function deNest(array) {
    // while (Array.isArray(array)) {
    //     array = array[0];
    // }
    // return array;

    // return Array.isArray(array) ? deNest(array[0]) : array;
    return array.flat(Infinity)[0];
}


console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));// 3
console.log(deNest([[[[[[[true]]]]]]]));// true
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));// "edabit"