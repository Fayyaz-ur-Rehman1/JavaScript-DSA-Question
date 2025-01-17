// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(num) {
    // let result = [];
    // for (let i = num; i >= 0; i--) {
    //     result.push(i)
    // }
    // return result

    // let result = [];
    // while (num >= 0) {
    //     result.push(num);
    //     num--;
    // }
    // return result;

    let result = [];
    for (let i = 0; i <= num; i++) {
        result.unshift(i);
    }
    return result;


    // if (num < 0) return [];
    // return [num].concat(countdown(num - 1));
    // return Array.from({ length: num + 1 }, (_, i) => num - i);
    // return [...Array(num + 1)].map((_, i) => num - i);


}

console.log(countdown(5)); // ➞ [5, 4, 3, 2, 1, 0]
console.log(countdown(1)); // ➞ [1, 0]
console.log(countdown(0)); // ➞ [0]
