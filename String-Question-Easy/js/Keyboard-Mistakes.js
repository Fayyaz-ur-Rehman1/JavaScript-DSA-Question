// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function keyboardMistakes(text) {
    // loop
    const replacements = {
        '4': 'A',
        '5': 'S',
        '0': 'O',
        '1': 'I'
    };
    let correctText = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        correctText += replacements[char] || char
    }
    return correctText

    // method
    // return text.split("").map(elm => replacements[elm] || elm).join("")
    // return text.split("").reduce((acc, curr) => {
    //     acc += replacements[curr] || curr;
    //     return acc
    // }, "")
}

console.log(keyboardMistakes("MUB45H1R")); // "MUBASHIR"
console.log(keyboardMistakes("DUBL1N"));  // "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE"));  // "SINGAPORE"