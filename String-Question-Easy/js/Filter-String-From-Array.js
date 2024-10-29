// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.


function filterArray(array) {

    // return array.filter(elm => typeof elm === "number")

    let resultStore = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number")
            resultStore.push(array[i])
    }
    return resultStore
}

console.log(filterArray([1, 2, 3, "a", "b", 4])); // [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // [0, 1729]
console.log(filterArray(["Nothing", "here"])); // []