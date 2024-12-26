// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(array) {
    // loop
    // for (let i = 0; i < array.length; i++) {
    //     array[i] = -array[i]
    // }
    // return array

    // method
    //    return  array.map(elm => -elm);
    return array.reduce((negateAcc, negateCurr) => {
        let n = -negateCurr;
        negateAcc.push(n);
        return negateAcc
    }, []);
}

console.log(negate([1, 2, 3, 4]));  //  [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4]));  //  [1, -2, 3, -4]
console.log(negate([]));  //  []
