// Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

function textToNumberBinary(words) {
    // const spl = words.toLowerCase().split(" ");
    // let binary = "";
    // for (let i = 0; i < spl.length; i++) {
    //     if (spl[i] === "zero") {
    //         binary += "0"
    //     } else if (spl[i] === "one") {
    //         binary += "1"
    //     }
    // }
    // const validBinary = Math.floor(binary.length / 8) * 8;
    // return binary.slice(0, validBinary);

    const text = words.toLowerCase().split(" ");
    const binary = text
        .filter(word => word === "zero" || word === "one")
        .map(word => (word === "zero" ? "0" : "1"))
        .join("");
    const length = binary.length;
    const validLength = Math.floor(length / 8) * 8;
    return binary.slice(0, validLength);

}

console.log(textToNumberBinary("zero one zero one zero one zero one")); // "01010101"
console.log(textToNumberBinary("Zero one zero ONE zero one zero one")); // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero one one two")); // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero three")); // ""
console.log(textToNumberBinary("one one")); // ""