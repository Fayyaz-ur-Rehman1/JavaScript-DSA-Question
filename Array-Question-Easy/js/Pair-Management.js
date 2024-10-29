// Given two arguments, return an array which contains these two arguments.

function makePair(num, num2) {
    // return [num,num2];
    // return new Array(num, num2)
    // return [...arguments]
    let arr = [];
     arr.push(num,num2);
     return arr;
}

console.log(makePair(1, 2));// [1, 2]
console.log(makePair(51, 21));// [51, 21]
console.log(makePair(512124, 215)); // [512124, 215]