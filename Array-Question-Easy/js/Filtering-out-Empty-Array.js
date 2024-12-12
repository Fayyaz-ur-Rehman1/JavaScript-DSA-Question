// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.
function removeEmptyArrays(arr) {
    // return arr.filter(x => !(Array.isArray(x) && x.length === 0));
    return arr.filter(x => x.length !== 0);
  }
  

// What I want:
console.log(removeEmptyArrays(["a", "b", []]));  // ["a", "b"]
console.log(removeEmptyArrays([1, 2, [], 4]));  // [1, 2, 4]
// What I am getting:
console.log(removeEmptyArrays(["a", "b", [], [1, 2, 3]]));  // ["a", "b", [1, 2, 3]]
// console.log(removeEmptyArrays(["a", "b", []]));  // ["a", "b", []]
// console.log(removeEmptyArrays([1, 2, [], 4]));  // [1, 2, [], 4]