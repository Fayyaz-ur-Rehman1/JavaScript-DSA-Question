// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(initial, words) {
    // let result = [];
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].includes(initial)) {
    //         result.push(words[i]);
    //     }
    // }
    // return result

    // method
    // return words.filter(word => word.startsWith(initial));
    // return words.reduce((result, word) => {
    //     if (word.startsWith(initial)) result.push(word);
    //     return result;
    // }, []);
    let result = [];
    words.forEach(word => {
        if (word.startsWith(initial)) {
            result.push(word);
        }
    });
    return result;

}

console.log(dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []