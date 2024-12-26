// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

function numberSyllables(word) {
    // return word.split("-").length;

    let modifiedWord = word.replace(/-/g, " ");
    let syllablesArray = modifiedWord.split(" ");

    const syllablesCount = syllablesArray.reduce((count) => count + 1, 0);
    return syllablesCount;

}

console.log(numberSyllables("buf-fet")); //  2
console.log(numberSyllables("beau-ti-ful")); //  3
console.log(numberSyllables("mon-u-men-tal")); //  4
console.log(numberSyllables("on-o-mat-o-poe-ia")); //  6