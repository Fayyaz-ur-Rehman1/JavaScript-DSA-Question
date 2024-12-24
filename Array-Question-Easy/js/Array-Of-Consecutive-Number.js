// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).
function getSequence(num1, num2) {
    // loop
    // let result = [];
    // for (let i = num1; i <= num2; i++) {
    //     result.push(i);
    // }
    // return result;

    // method
    // return Array.from({ length: num2 - num1 + 1 }, (_, i) => num1 + i);
    return Array(num2 - num1 + 1)
        .fill(0)
        .map((_, i) => num1 + i);
}

console.log(getSequence(1, 5));  // [1, 2, 3, 4, 5]
console.log(getSequence(98, 100));  // [98, 99, 100]
console.log(getSequence(1000, 1000));  // [1000]