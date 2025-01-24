// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

function transform(array) {
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         result.push(array[i] - 1)
    //     } else {
    //         result.push(array[i] + 1)
    //     }
    // }
    // return result;

    // let result = [];
    // for (const num of array) {
    //     result.push(num % 2 === 0 ? num - 1 : num + 1);
    // }
    // return result;

    // method
    // return array.map(num => num % 2 === 0 ? num - 1 : num + 1);
    // return array.reduce((result, num) => {
    //     result.push(num % 2 === 0 ? num - 1 : num + 1);
    //     return result;
    // }, []);
    const adjust = num => num % 2 === 0 ? num - 1 : num + 1;
    return array.map(adjust);
}

console.log(transform([1, 2, 3, 4, 5])); // [2, 1, 4, 3, 6]
console.log(transform([3, 3, 4, 3])); // [4, 4, 3, 4]
console.log(transform([2, 2, 0, 8, 10])); // [1, 1, -1, 7, 9]