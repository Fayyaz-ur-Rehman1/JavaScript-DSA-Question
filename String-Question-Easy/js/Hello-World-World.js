// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

function helloWorld(num) {
    // if (num % 3 === 0 && num % 5 === 0) {
    //     return "Hello World";
    // } else if (num % 3 === 0) {
    //     return "Hello";
    // } else if (num % 5 === 0) {
    //     return "World";
    // }

    let result = (num % 3 === 0 ? "Hello" : "") + (num % 5 === 0 ? " World" : "");
    return result.trim();
}

console.log(helloWorld(3)); // "Hello"
console.log(helloWorld(5)); // "World"
console.log(helloWorld(15)); // "Hello World"