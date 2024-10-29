// Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr) {
    // return arr.map(e => -e)
    // return arr.reduce((acc, curr) => {
    //     acc.push(-curr);
    //     return acc
    // }, [])
    // return arr.flatMap(e => -e)

    let resultStore = []
    for (let i = 0; i < arr.length; i++) {
        resultStore.push(-arr[i])
    }
    return resultStore
}

console.log(invertArray([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
console.log(invertArray([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5]
console.log(invertArray([])); // []
