// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.
// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

function filterString(txt) {
    // let upperCaseCount = 0;
    // let lowerCaseCount = 0;
    // let numberCount = 0;
    // let specialCharCount = 0;

    // for (let i = 0; i < txt.length; i++) {
    //     let char = txt[i];
    //     if (/[A-Z]/.test(char)) {
    //         upperCaseCount++;
    //     } else if (/[a-z]/.test(char)) {
    //         lowerCaseCount++;
    //     } else if (/[0-9]/.test(char)) {
    //         numberCount++;
    //     } else {
    //         specialCharCount++;
    //     }
    // }
    // return [upperCaseCount, lowerCaseCount, numberCount, specialCharCount];

    const upperCaseCount = [...txt].filter(char => char === char.toUpperCase() && /[A-Z]/.test(char)).length;
    const lowerCaseCount = [...txt].filter(char => char === char.toLowerCase() && /[a-z]/.test(char)).length;
    const numberCount = [...txt].filter(char => /[0-9]/.test(char)).length;
    const specialCharCount = [...txt].filter(char => /[^A-Za-z0-9]/.test(char)).length;

    return [upperCaseCount, lowerCaseCount, numberCount, specialCharCount];

    // const upperCaseCount = [...txt].filter(char => /[A-Z]/.test(char)).length;
    // const lowerCaseCount = [...txt].filter(char => /[a-z]/.test(char)).length;
    // const numberCount = [...txt].filter(char => /[0-9]/.test(char)).length;
    // const specialCharCount = [...txt].filter(char => /[^A-Za-z0-9]/.test(char)).length;

    // return [upperCaseCount, lowerCaseCount, numberCount, specialCharCount];
}

console.log(filterString("*$(#Mu12bas43hiR%@*!")); // [2, 6, 4, 8]
// 2 uppercase letters
// 6 lowercase letters
// 4 numbers
// 8 special characters
console.log(filterString("^^Edabit^^%$#12379")); // [1, 5, 5, 7]
console.log(filterString("**Airforce1**")); // [1, 7, 1, 4]