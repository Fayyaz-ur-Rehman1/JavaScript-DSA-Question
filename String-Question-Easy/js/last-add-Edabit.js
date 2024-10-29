// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(str) {
    // return str.concat("Edabit");
    // return  str.padStart(7).trimStart() + "Edabit";
    // return str + "Edabit";
    // return `${str}Edabit`;

    let newStr = "Edabit";
    for (let i = 0; i < str.length; i++) {
        return str += newStr;
    }
}

console.log(nameString("Mubashir")) // "MubashirEdabit"
console.log(nameString("Matt")) // "MattEdabit"
console.log(nameString("javaScript")) // "javaScriptEdabit"