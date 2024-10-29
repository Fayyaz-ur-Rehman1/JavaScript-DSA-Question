// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
    // if (str === str.toLowerCase()) {
    //     return "lower"
    // } else if (str === str.toUpperCase()) {
    //     return "upper"
    // }
    // return "mixed"

    for (let i = 0; i < str.length; i++) {
        if (str === str.toLowerCase()) {
            return "lower"
        } else if (str === str.toUpperCase()) {
            return "upper"
        }
    }
    return "mixed"
}

console.log(getCase("whisper...")); // "lower"
console.log(getCase("SHOUT!")); // "upper"
console.log(getCase("Indoor Voice")); // "mixed"