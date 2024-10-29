// Create a function that takes a string and returns the concatenated first and last character.


function firstLast(str) {
    // return str[0] + str[str.length - 1]
    // return str.slice(0,1) + str.slice(-1)
    return str.charAt(0) + str.charAt(str.length - 1);

    // let resultStore = "";
    // for (let i = 0; i < 1; i++) {
    //     resultStore += str[i]
    // }
    // for (let j = str.length - 1; j < str.length; j++) {
    //     resultStore += str[j]
    // }
    // return resultStore
}

console.log(firstLast("ganesh")); // "gh"
console.log(firstLast("kali")); // "ki"
console.log(firstLast("shiva")); // "sa"
console.log(firstLast("vishnu")); // "vu"
console.log(firstLast("durga")); // "da"