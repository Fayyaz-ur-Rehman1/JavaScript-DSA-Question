// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(num) {
    // let Burp = "r";
    // return "Bu" + Burp.slice(0).repeat(num) + "p"
    
    let reapeat = "r";
    let resultStore = "";
    for (let i = 0; i < num; i++) {
        resultStore += reapeat
    }
    return "Bu" + resultStore + "p"
}

console.log(longBurp(3)); // "Burrrp"
console.log(longBurp(5)); // "Burrrrrp"
console.log(longBurp(9)); // "Burrrrrrrrrp"