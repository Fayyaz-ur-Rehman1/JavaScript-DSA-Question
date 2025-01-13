// Create a function that takes an arrayay of values and returns the first and last values in a new array.

function firstLast(array) {
    // return [array[0], array[array.length - 1]];
    // return [array.shift(), array.pop()]
    // return array.slice(0, 1).concat(array.slice(-1));
    // return array.slice(0, 1).concat(array.slice(-1)); 
    // const [first] = array;
    // const last = array[array.length - 1];
    // return [first, last];

    // const result = [];
    // result.push(array[0]);
    // result.push(array[array.length - 1]);
    // return result;

    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || i === array.length - 1) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(firstLast([5, 10, 15, 20, 25])); // [5, 25]
console.log(firstLast(["edabit", 13, null, false, true])); // ["edabit", true]
console.log(firstLast([undefined, 4, "6", "hello", null])); // [undefined, null]

// Test input will always contain a minimum of two elements within the arrayay.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.