// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).


function countSyllables(str) {
    // return str.length / 2

    // let count = 0
    // for (let i = 0; i < str.length; i++) {
    //     count += str[i].length / 2

    // }
    // return count

    let repeated = str[0] + str[1];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] + str[i + 1]).toLowerCase() === repeated.toLowerCase()) {
            count++
        }
    }
    return count
}

console.log(countSyllables("Hehehehehehe")); // 6
console.log(countSyllables("bobobobobobobobo")); // 8
console.log(countSyllables("NANANA")); // 3