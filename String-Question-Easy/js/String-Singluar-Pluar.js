function isPlural(word) {
    // return word.endsWith("s");
    
    for (let i = word.length - 1; i < word.length; i++) {
     if(word[i] === "s"){
        return true
     }
    }
    return false
}

console.log(isPlural("changes")); // true
console.log(isPlural("change"));  // false
console.log(isPlural("dudes"));   // true
console.log(isPlural("magic"));   // false
