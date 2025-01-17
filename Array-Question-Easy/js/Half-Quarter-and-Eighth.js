// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(num) {
    return [num / 2, num / 4, num / 8];
}

console.log(halfQuarterEighth(6)); // [3, 1.5, 0.75]
console.log(halfQuarterEighth(22)); // [11, 5.5, 2.75]
console.log(halfQuarterEighth(25)); // [12.5, 6.25, 3.125]