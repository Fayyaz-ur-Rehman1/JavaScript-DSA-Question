// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

function greeting(str) {
    // return `Hello, ${str}!`
    // let newStr = "Hello, "
    // return newStr.concat(str + "!")
    return "Hello, " + str + "!"
}

console.log(greeting("Matt")); // "Hello, Matt!"
console.log(greeting("Helen")); // "Hello, Helen!"
console.log(greeting("Mubashir")); // "Hello, my Love!"