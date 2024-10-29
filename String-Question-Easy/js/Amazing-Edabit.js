// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
    // if (str.includes("edabit")) {
    //     return str;
    // }
    // return str.replace("amazing", "not amazing");

    let containsEdabit = false;
    let result = "";

    for (let i = 0; i <= str.length - 6; i++) {
        if (str.slice(i, i + 6) === "edabit") {
            containsEdabit = true;
            break;
        }
    }

    if (containsEdabit) {
        return str;
    }

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + 7) === "amazing") {
            result += "not amazing";
            i += 6;
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(amazingEdabit("edabit is amazing.")); // "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")); // "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")); // "Infinity is not amazing."



// let spl = str.split(" ")
// if (spl !== "edabit") {
//     return `${spl.slice(0, 2).join(" ")} not ${spl.slice(2, 3)}`
// }else{
//     return `${str}`
// }

// let resultStore = "";
// for (let i = 0; i < str.length; i++) {
//     if (str !== "edabit") {
//         resultStore += str[i]
//     }
// }
// return resultStore;