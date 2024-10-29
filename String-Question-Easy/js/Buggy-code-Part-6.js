// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function removeNumbers(str) {
    // return str.replace(/[0-9]/g,"")

    // let spl = str.split("");
    // return spl.filter(e => !/[0-9]/.test(e)).join("");

    let resultStore = "";
    for (let i = 0; i < str.length; i++) {
        if (!/[0-9]/.test(str[i])) {
            resultStore += str[i];
        }
    }
    return resultStore;
}

console.log(removeNumbers("mubashir1")); // "mubashir"
console.log(removeNumbers("12ma23tt")); // "matt"
console.log(removeNumbers("e1d2a3b4i5t6")); // "edabit"