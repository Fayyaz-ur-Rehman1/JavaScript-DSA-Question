// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(letters) {
    // return letters.split("").sort().join("");
    // return letters.split("").sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0)).join("")

    let arr = letters.split("");
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr.join("");
}

console.log(AlphabetSoup("hello"));  // "ehllo"
console.log(AlphabetSoup("edabit"));  // "abdeit"
console.log(AlphabetSoup("hacker"));  // "acehkr"
console.log(AlphabetSoup("geek"));  // "eegk"
console.log(AlphabetSoup("javascript"));  // "aacijprstv"