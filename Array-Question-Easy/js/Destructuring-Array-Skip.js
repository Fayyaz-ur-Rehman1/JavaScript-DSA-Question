// ou can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.


const arr = ["eyes", "nose", "lips", "ears"];
let [eyes, , lips] = arr;

console.log(eyes); // "eyes"
console.log(lips); // "lips"
