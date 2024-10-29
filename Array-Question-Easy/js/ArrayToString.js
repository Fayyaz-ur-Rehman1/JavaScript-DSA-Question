// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
    // with forloop
    // let resultStore = "";
    // for(let i = 0; i < arr.length; i++){
    //   resultStore += arr[i]
    // }
    // return resultStore;

    // with method
    // return arr.join("");
    return arr.toString().split(",").join("");
}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // "123asdAAAA"