// Create a function which returns the length of a string, WITHOUT using String.length property.

function length(str) {
    // let sum = 0;
    // for (let i = 0; i < str.length; i++) {
    //     sum = i + 1
    // }
    // return Number(sum)
    return [...arguments].join("").split("").length
}

console.log(length("Hello World"));// 11
console.log(length("Edabit"));  //6
console.log(length("wash your hands!"));// 16