// Create a function that removes the first and last characters from a string.

function removeFirstLast(characters) {
    // loop
    // if (characters.length <= 2) {
    //     return characters;
    // }
    // let result = "";
    // for (let i = 1; i < characters.length - 1; i++) {
    //     result += characters[i];
    // }
    // return result;

    // method
    if (characters.length <= 2) {
        return characters;
    }
    // return characters.slice(1, characters.length - 1);
    return characters.substring(1, characters.length - 1)
}

console.log(removeFirstLast("hello")); //z ➞ "ell"
console.log(removeFirstLast("maybe")); // ➞ "ayb"
console.log(removeFirstLast("benefit")); // ➞ "enefi"
console.log(removeFirstLast("a")); // ➞ "a"