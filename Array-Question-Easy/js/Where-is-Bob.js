// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

function findBob(array) {
    // loop
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === "Bob") {
    //         return i;
    //     }
    // }
    // return -1;

    // method
    // return array.indexOf("Bob");
    return array.findIndex(name => name === "Bob");
}

console.log(findBob(["Jimmy", "Layla", "Bob"])); // 2
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])); // 0
console.log(findBob(["Jimmy", "Layla", "James"])); // -1