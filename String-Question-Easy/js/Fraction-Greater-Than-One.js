// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(evaluated) {
    if (eval(evaluated) > 1) {
        return true
    } else {
        return false
    }
}

console.log(greaterThanOne("1/2")); // false
console.log(greaterThanOne("7/4")); // true
console.log(greaterThanOne("10/10")); // false