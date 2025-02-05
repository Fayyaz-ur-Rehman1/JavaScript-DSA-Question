// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

function nameShuffle(name) {
    let rev = name.split(" ");
    let result = ""
    for (let i = rev.length - 1; i >= 0; i--) {
        result  += rev[i] + " "
    }
return result
    // method
    // return name.split(" ").reverse().join(" ")
}

console.log(nameShuffle("Donald Trump"));  // "Trump Donald"
console.log(nameShuffle("Rosie O'Donnell"));  // "O'Donnell Rosie"
console.log(nameShuffle("Seymour Butts"));  // "Butts Seymour"
