// A number added with its additive inverse equals zero.Create a function that returns an array of additive inverses.

function additiveInverse(additiveInverse) {
    // loop
    // let result = [];
    // for (let i = 0; i < additiveInverse.length; i++) {
    //     result.push(-additiveInverse[i]);
    // }
    // return result;

    // method
    // return additiveInverse.map(elm => -elm);
    return additiveInverse.reduce((acc, curr) => {
        acc.push(-curr);
        return acc
    }, []);
}
console.log(additiveInverse([5, -7, 8, 3]));  // [-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1]));  // [-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35]));  // [5, 25, -35]