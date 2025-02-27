// Write a function that retrieves the last n elements from an array.

function last(arr, n) {
    // if (n > arr.length) return "invalid";
    // return arr.slice(-n);

    // if (n > arr.length) return "invalid";
    //     return arr.slice(-n);

    if (n > arr.length) return "invalid";
    return arr.filter((_, i) => i >= arr.length - n);
    
}

console.log(last([1, 2, 3, 4, 5], 1)); //[5]
console.log(last([4, 3, 9, 9, 7, 6], 3)); //[9, 7, 6]
console.log(last([1, 2, 3, 4, 5], 7)); // "invalid"
console.log(last([1, 2, 3, 4, 5], 0)); //[]