// Create a function that finds each factor of a given number n.Your solution should return an array of the number(s) that meet this criteria.


function findFactors(n) {
    // if (n === 0) return [];
    // let factor = [];
    // for (let i = 0; i <= n; i++) {
    //     if (n % i === 0) {
    //         factor.push(i);
    //     }
    // }
    // return factor;

    if (n === 0) return [];
    return Array.from({ length: n }, (_, i) => i + 1)
        .filter(i => n % i == 0);
}

console.log(findFactors(9));  // [1, 3, 9]
// 9 has three factors 1, 3 and 9
console.log(findFactors(12));  // [1, 2, 3, 4, 6, 12]
console.log(findFactors(20));  // [1, 2, 4, 5, 10, 20]
console.log(findFactors(0)); // []
// 0 has no factorsf