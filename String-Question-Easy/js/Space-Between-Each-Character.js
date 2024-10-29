// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    // return str.split("").join(" ")

    let resultStore = "";
    for (let i = 0; i < str.length; i++) {
        resultStore += str[i] + " "
    }
    return resultStore
}

console.log(spaceMeOut("space")); // "s p a c e"
console.log(spaceMeOut("far out")); // "f a r   o u t"
console.log(spaceMeOut("elongated musk")); // "e l o n g a t e d   m u s k"