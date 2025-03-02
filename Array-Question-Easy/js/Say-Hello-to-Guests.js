// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".


function greetPeople(list) {
    let result = "";

    for (let i = 0; i < list.length; i++) {
        result += "Hello " + list[i];

        if (i !== list.length - 1) {
            result += ", "
        }
    }
    return result;

    // method

    // return list.map(name => `Hello ${name}`).join(" ");

    // return list.reduce((acc, curr) => {
    //     acc += "Hello " + curr + ","
    //     return acc;
    // }, "");
}

console.log(greetPeople(["Joe"])); // "Hello Joe"
console.log(greetPeople(["Angela", "Joe"])); // "Hello Angela, Hello Joe"
console.log(greetPeople(["Frank", "Angela", "Joe"])); // "Hello Frank, Hello Angela, Hello Joe"