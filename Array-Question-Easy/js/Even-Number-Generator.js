// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
    //loop
    let even = [];
    // for (let i = 1; i <= num; i++) {
    //     if (i % 2 === 0) {
    //         even.push(i)
    //     }
    // }


    // for (let i = 2; i <= num; i += 2) {
    //     even.push(i);
    // }
    // return even;


    // method
    // return Array.from({ length: num }, (_, i) => i + 1).filter(n => n % 2 === 0)

    let evens = [];
    [...Array(num + 1).keys()].forEach(n => {
        if (n % 2 === 0 && n !== 0) evens.push(n);
    });
    return evens;

}

console.log(findEvenNums(8)); // [2, 4, 6, 8]
console.log(findEvenNums(4)); // [2, 4]
console.log(findEvenNums(2)); // [2]