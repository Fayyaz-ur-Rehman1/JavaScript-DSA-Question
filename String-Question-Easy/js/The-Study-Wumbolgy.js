// Create a function that flips M's to W's (all uppercase).

function wumbo(str) {
    // return str.replace("M", "W");

    let resultStore = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "M") {
         resultStore += "W"
        }else{
            resultStore += str[i]
        }
    }
    return resultStore
}

console.log(wumbo("I LOVE MAKING CHALLENGES")); // "I LOVE WAKING CHALLENGES"
console.log(wumbo("MEET ME IN WARSAW")); // "WEET WE IN WARSAW"
console.log(wumbo("WUMBOLOGY")); // "WUWBOLOGY"