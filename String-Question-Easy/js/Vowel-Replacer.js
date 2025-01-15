// Create a function that replaces all the vowels in a string with a specified character.

function replaceVowels(str, character) {
    // let vowels = "aeiou";
    // let result = "";
    // for (let i = 0; i < str.length; i++) {
    //     if (vowels.includes(str[i])) {
    //         result += character
    //     } else {
    //         result += str[i];
    //     }
    // }
    // return result;

    // return str.replace(/[aeiou]/g, character);
    return str.split('').map(c => 'aeiou'.includes(c) ? character : c).join('');

}

console.log(replaceVowels("the aardvark", "#")); // "th# ##rdv#rk"
console.log(replaceVowels("minnie mouse", "?")); // "m?nn?? m??s?"
console.log(replaceVowels("shakespeare", "*")); // "sh*k*sp**r*"