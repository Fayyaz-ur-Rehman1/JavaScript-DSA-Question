// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

// To illustrate:

function profitableGamble(prob, prize, pay) {
    return prob * prize > pay
}

// console.log(profitableGamble(0.2, 50, 9));
// ... should yield true, since the net profit is 1(0.2 * 50 - 9), and 1 > 0.
console.log(profitableGamble(0.2, 50, 9)); // ➞ true
console.log(profitableGamble(0.9, 1, 2)); // ➞ false
console.log(profitableGamble(0.9, 3, 2)); // ➞ true