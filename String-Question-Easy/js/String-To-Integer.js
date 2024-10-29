// Create a function that takes a string and returns it as an integer.

function stringInt(str) {
    // return str * 1
    // return str - 0
    // return str / 1
    // return parseInt(str)
    // return Number(str)


    // let num = 0
    for (let i = 0; i < str.length; i++) {
        // return Number(str)
        // return num = +str
        return parseInt(str)
    }

}
console.log(stringInt("6")); // 6
console.log(stringInt("1000")); // 1000
console.log(stringInt("12")); // 12