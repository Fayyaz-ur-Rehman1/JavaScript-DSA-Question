// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str) {
    // let result = str.slice(0, 2);
    // return `${result}... ${result}... ${str}`

    let resulStore = "";
    for (let i = 0; i < 2; i++) {
        resulStore += str[i]
    }
    return `${resulStore}... ${resulStore}... ${str}?`
}

console.log(stutter("incredible")); // "in... in... incredible?"
console.log(stutter("enthusiastic")); // "en... en... enthusiastic?"
console.log(stutter("outstanding")); // "ou... ou... outstanding?"