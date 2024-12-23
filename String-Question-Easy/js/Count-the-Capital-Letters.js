// Given a string of letters, how many capital letters are there?

function capitalLetters(letters) {
    // loop
    // let capitalText = 0;
    // for (let i = 0; i < letters.length; i++) {
    //     if (letters[i].includes(letters[i].toUpperCase())) {
    //         capitalText++
    //     }
    // }
    // return capitalText

    // methods
    // let lettersArray = letters.split("");
    // let result = lettersArray.reduce((word, curLetter) => {
    //     if (curLetter === curLetter.toUpperCase() && curLetter !== curLetter.toLowerCase()) {
    //         word++
    //     }
    //     return word
    // }, 0)

    // return result;

    return letters.split("").filter(char => char === char.toUpperCase() && char !== char.toLowerCase()).length;
}

console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); // ➞ 6
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); // ➞ 14
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // ➞ 0