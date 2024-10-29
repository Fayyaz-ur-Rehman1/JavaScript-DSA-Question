// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = (str) => {
    //  return `Hello ${str}!`
    return "Hello " + str + "!"
}
console.log(helloName("Gerald")); // "Hello Gerald!"
console.log(helloName("Tiffany")); // "Hello Tiffany!"
console.log(helloName("Ed")); // "Hello Ed!"