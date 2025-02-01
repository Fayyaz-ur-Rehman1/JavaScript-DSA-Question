// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

function reverseCapitalize(characters) {
    // loop
    let spl = characters.toUpperCase().split("");
    let str = "";
    for (let i = spl.length - 1; i >= 0; i--) {
        str += spl[i];
    }
    return str;

    // method
    // let spl = characters.split("").reverse().join("");
    // return spl.toUpperCase();
}

console.log(reverseCapitalize("abc")); // ➞ "CBA"
console.log(reverseCapitalize("hellothere")); // ➞ "EREHTOLLEH"
console.log(reverseCapitalize("input")); // ➞ "TUPNI"