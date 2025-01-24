// Your friend is trying to write a function that removes all vowels from a string.They write:

function removeVowels(str) {
    return str.replace(/[aeiou]/g, "")
}

// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

console.log(removeVowels("candy")); //  "cndy"
console.log(removeVowels("hello")); //  "hllo"
// The "e" is removed, but the "o" is still there!
console.log(removeVowels("apple")); //  "pple"