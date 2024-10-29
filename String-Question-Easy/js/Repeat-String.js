// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(str, num) {
    // if (typeof str === 'string') {
    //     return str.repeat(num, str)
    // } else {
    //     return "Not A String !!"
    // }

    if (typeof str !== 'string') {
        return "Not A String !!"
    }
    let resultStore = "";
    for (let i = 0; i <= num; i++) {
        resultStore += str
    }
    return resultStore
}

console.log(repeatString("Mubashir", 2)); // "MubashirMubashir"
console.log(repeatString("Matt", 3)); // "MattMattMatt"
console.log(repeatString(1990, 7));// "Not A String !!"
