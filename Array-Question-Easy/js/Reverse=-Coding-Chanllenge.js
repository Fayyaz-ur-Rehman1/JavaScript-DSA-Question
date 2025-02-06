// This is a reverse coding challenge.Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

function mysteryFunc(arr, num) {
    // loop
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] % num)
    // }
    // return result

    // method
    // return arr.reduce((acc, curr) => {
    //     acc.push(curr % num)
    //     return acc
    // }, [])

    // return arr.map((value) => value % num)

    let result = [];
    arr.forEach(value => result.push(value % num));
    return result;
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2)); // [1, 1, 0, 0, 1]
console.log(mysteryFunc([9, 8, 16, 47], 4)); // [1, 0, 0, 3]
console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5)); // [2, 1, 4, 0, 3, 1]
console.log(mysteryFunc([6, 1], 7)); // [6, 1]
console.log(mysteryFunc([3, 2, 9], 3)); // [0, 2, 0]
console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10)); // [8, 2, 0, 9, 3, 0]