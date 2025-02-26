// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(str) {
    let a = "";
    for (let i = 0; i < str; i++) {
        a += "a";
    }
    return `Ed${a}bit `;
    // return "Ed" + a + "bit"

    // method
    // let a = "a"
    // return ` Ed${a.repeat(str)}bit`
}

console.log(howManyTimes(5)); // "Edaaaaabit"
console.log(howManyTimes(0)); // "Edbit"
console.log(howManyTimes(12)); // "Edaaaaaaaaaaaabit"