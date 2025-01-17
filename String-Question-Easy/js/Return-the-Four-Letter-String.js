// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(words) {
    // let letters = [];
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length === 4) {
    //         letters.push(words[i]);
    //     }
    // }
    // return letters;

    return words.filter(word => word.length === 4);

}

console.log(isFourLetters(["Tomato", "Potato", "Pair"])); // ["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); // ["Bear"]
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); // ["Ryan", "Matt"]