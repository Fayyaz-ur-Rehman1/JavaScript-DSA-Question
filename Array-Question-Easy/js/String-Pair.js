// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:
// Examples

function stringPairs(string) {
    // let result = [];
    // for (let i = 0; i < string.length; i++) {
    //     if (i + 1 < string.length) {
    //         result.push(string[i] + string[i + 1]);
    //     } else {
    //         result.push(string[i] + '*');
    //     }
    // }
    // return result;

    // method
    let arr = str.split('');
    let result = [];
    arr.forEach((char, index) => {
        if (index % 2 === 0) {
            let pair = char;
            if (index + 1 < arr.length) {
                pair += arr[index + 1];
            } else {
                pair += '*';
            }
            result.push(pair);
        }
    });

    return result;
}

console.log(stringPairs("mubashir")); //["mu", "ba", "sh", "ir"]
console.log(stringPairs("edabit")); //["ed", "ab", "it"]
console.log(stringPairs("airforces")); //["ai", "rf", "or", "ce", "s*"]