// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(number) {
    let str = "";
    for (let i = 1; i <= number; i++) {
        str += "-";
    }
    return str;

    // method
    // return "-".repeat(number);
}

console.log(Go(1)); // "-"
console.log(Go(5)); // "-----"
console.log(Go(3)); // "---"