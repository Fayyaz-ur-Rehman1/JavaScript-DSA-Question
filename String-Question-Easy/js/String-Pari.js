// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

function stringPairs(str) {
    // loops
    // let result = [];
    // for (let i = 0; i < str.length; i += 2) {
    //     if (i + 1 < str.length) {
    //         result.push(str[i] + str[i + 1]);
    //     } else {
    //         result.push(str[i] + "*")
    //     }
    // }
    // return result;

    // method
    let pairs = str.match(/.{1,2}/g) || [];
    if (pairs.length > 0 && pairs[pairs.length - 1].length === 1) {
        pairs[pairs.length - 1] += "*";
    }
    return pairs;
}

console.log(stringPairs("mubashir")); // ["mu", "ba", "sh", "ir"]
console.log(stringPairs("edabit")); // ["ed", "ab", "it"]
console.log(stringPairs("airforces")); // ["ai", "rf", "or", "ce", "s*"]