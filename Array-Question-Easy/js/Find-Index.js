// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr, str) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == str) {
    //         return i
    //     }
    // }
    // return -1

    // return arr.findIndex((e) => {
    //     return e == str
    // })

    let index = -1;
    arr.forEach((elm, i) => {
        if (elm === str && index === -1) {
            index = i;
        }
    });
    return index;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0