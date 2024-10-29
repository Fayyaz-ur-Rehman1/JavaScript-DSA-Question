// Write a function to reverse an array.
// Reverse Array

// with method
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));  // => [6,5,4,3,2,1] 


// with forloop
function reverseArray(arr) {
    let storeResult = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
        storeResult.push(arr[i]);
    }
    return storeResult
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));  // => [6,5,4,3,2,1] 


// not use push method
function reverseArray(arr) {
    let storeResult = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        storeResult[arr.length - 1 - i] = arr[i];  // Indexing ka use kar ke value assign kar rahe hain
    }
    return storeResult;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));  // => [6,5,4,3,2,1]