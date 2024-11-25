// Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples

function findBrokenKeys(correctPhrase, incorrectTyped) {
    // let result = [];
    // for (let i = 0; i < correctPhrase.length; i++) {
    //     if (correctPhrase[i] !== incorrectTyped[i] && !result.includes(correctPhrase[i])) {
    //         result.push(correctPhrase[i]);
    //     }
    // }
    // return result;

    // method

    // const splitedEl = correctPhrase.split("");
    // return splitedEl.reduce((acc, curr, index) => {
    //     if (curr !== incorrectTyped[index] && !acc.includes(curr)) {
    //         acc.push(curr);
    //     }
    //     return acc;
    // }, []);

    // let result = [];
    // correctPhrase.split("").forEach((char, index) => {
    //     if (char !== incorrectTyped[index] && !result.includes(char)) {
    //         result.push(char)
    //     }
    // })
    // return result

    let correctChars = correctPhrase.split("");
    let incorrectChars = incorrectTyped.split("");

    let broken = correctChars
        .map((char, i) => (char !== incorrectChars[i] ? char : null))
        .filter(char => char !== null);
    return [...new Set(broken)]
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ["p"]
console.log(findBrokenKeys("starry night", "starrq light")); // ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5")); // ["b", "e", "v", "n"]