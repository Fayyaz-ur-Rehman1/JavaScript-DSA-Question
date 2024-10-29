// Create a function that finds each factor of a given number n.Your solution should return an array of the number(s) that meet this criteria.


function findFactors(num) {
    let resultStore = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            resultStore.push(i)
        }
    }
    return resultStore
}

console.log(findFactors(9));  // [1, 3, 9]
// 9 has three factors 1, 3 and 9
console.log(findFactors(12));  // [1, 2, 3, 4, 6, 12]
console.log(findFactors(20));  // [1, 2, 4, 5, 10, 20]
console.log(findFactors(0)); // []
// 0 has no factorsf