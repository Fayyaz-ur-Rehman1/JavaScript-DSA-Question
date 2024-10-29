// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

function isBoiling(temp) {
    let value = Number(temp.slice(0, -1));
    let units = temp.slice(-1).toUpperCase();

    // if (units === "F") {
    //     return value >= 212
    // } else if (units === "C") {
    //     return value >= 100
    // } else {
    //     return false
    // }

    switch (units) {
        case "F":
            return value >= 212

        case "C":
            return value >= 100

        default:
            return false
    }
}

console.log(isBoiling("212F")); // true
console.log(isBoiling("100C")); // true
console.log(isBoiling("0F")); // false