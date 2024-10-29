// Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {
    // return str.slice(1)
    // return str.substr(1)

    let newStr = "";
    for (let i = 1; i < str.length; i++) {
        newStr += str[i]
    }
    return newStr
}
console.log(newWord("apple")); // "pple"
console.log(newWord("cherry")); // "herry"
console.log(newWord("plum")); // "lum"