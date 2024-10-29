// Create a function that will put the first argument, a character, between every word in the second argument, a string.

function add(first, second) {

    // return second.split(" ").join(first);

    let spl = second.split(" ");
    let resultStore = "";
    for (let i = 0; i < spl.length; i++) {
        resultStore += spl[i];

        if (i < spl.length - 1) {
            resultStore += first
        }
    }


    return resultStore
}

console.log(add("R", "javascript is fun")); // "javascriptRisRfun"
console.log(add("#", "hello world!")); // "hello#world!"
console.log(add("#", " ")); // "#"