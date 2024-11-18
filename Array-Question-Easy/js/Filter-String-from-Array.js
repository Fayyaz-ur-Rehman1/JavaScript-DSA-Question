// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {

    // forloop
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i])
        }
    }
    return result

    // method
    // return arr.filter(elm => typeof elm === "number");
    // return arr.map(elm => typeof elm === "number" ? elm : )
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));// ➞ [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));//➞ [0, 1729]
console.log(filterArray(["Nothing", "here"])); //➞ []