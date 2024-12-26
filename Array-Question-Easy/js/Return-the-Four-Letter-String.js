// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(words) {
    // loop
    let letters = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 4) {
            letters.push(words[i]);
        }
    }
    return letters;

    // method
    // return words.filter(elm => elm.length === 4);
}

console.log(isFourLetters(["Tomato", "Potato", "Pair"])); //["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); //["Bear"]
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); //["Ryan", "Matt"]