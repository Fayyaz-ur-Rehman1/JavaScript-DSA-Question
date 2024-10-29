// Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str, num) {
    let lastChar = str.slice(-1);
    return str.slice(0, -1) + lastChar.repeat(num + 1);

    // let resultStore = str.slice(0, str.length - 1);
    // let lastChar = str[str.length - 1];
    // for (let i = 0; i < num + 1; i++) {
    //     resultStore += lastChar;
    // }

    // return resultStore;
}

console.log(modifyLast("Hello", 3));// "Hellooo"
console.log(modifyLast("hey", 6));// "heyyyyyy"
console.log(modifyLast("excuse me what?", 5)); // "excuse me what?????"