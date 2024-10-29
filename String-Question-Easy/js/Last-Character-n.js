// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(str) {

    // if(str.slice(-1) === "n"){
    //     return true
    // }
    // return false

    return str.charAt(str.length - 1) === 'n';


    // for (let i = str.length - 1; i < str.length; i++) {
    //     if (str[i] === "n") {
    //         return true
    //     }
    // }
    // return false
}

console.log(isLastCharacterN("Aiden")); // true
console.log(isLastCharacterN("Piet")); // false
console.log(isLastCharacterN("Bert")); // false
console.log(isLastCharacterN("Dean")); // true