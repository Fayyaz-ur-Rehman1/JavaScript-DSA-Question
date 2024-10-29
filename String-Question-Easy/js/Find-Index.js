// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr, str) {
    // return arr.findIndex(e => e == str)
    // return arr.indexOf(str)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i
        }
    }
    return -1
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0