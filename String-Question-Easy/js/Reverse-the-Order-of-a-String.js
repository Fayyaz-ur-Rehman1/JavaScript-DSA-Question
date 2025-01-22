// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(string) {
    // loop
    // let reverse = "";
    // for (let i = string.length - 1; i >= 0; i--) {
    //     reverse += string[i];
    // }
    // return reverse;

    // method
    return string.split("").reverse().join("");
}

console.log(reverse("Hello World")); //  "dlroW olleH"
console.log(reverse("The quick brown fox.")); //  ".xof nworb kciuq ehT"
console.log(reverse("Edabit is really helpful!")); //  "!lufpleh yllaer si tibadE"