// Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(words, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(words)) {
            return false
        }
    }
    return true

    // return array.every(elm => !elm.includes(words));
    // return !array.some(elm => elm.includes(words));
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // true
console.log(forbiddenLetter("m", [])); // true