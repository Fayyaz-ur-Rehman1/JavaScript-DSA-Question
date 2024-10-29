// Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(words, array) {
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].includes(words)) {
    //         return false
    //     }
    // }
    // return true

    let forBidden = true
    array.forEach(elm => {
        if (elm.includes(words)) {
            forBidden = false
        }
    })
    return forBidden

    // return array.every(elm => !elm.includes(words))
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // true
console.log(forbiddenLetter("m", [])); // true