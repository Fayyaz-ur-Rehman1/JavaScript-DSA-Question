// Create a function that adds a string ending to each member in an array.

function addEnding(word, ending) {
    // for loop
    let addEnding = [];
    for (let i = 0; i < word.length; i++) {
        addEnding.push(word[i] + ending)
    }
    return addEnding;

    // methods
    // return word.map((elm) => elm + ending)
    // return word.reduce((acc, cur) => {
    //     acc.push(cur + ending);
    //     return acc;
    // }, [])
    // const result = [];
    // word.forEach(elm => result.push(elm + ending));
    // return result;
    // return word.flatMap(elm => [elm + ending]);

}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")); // ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding(["new", "pander", "scoop"], "er")); // ["newer", "panderer", "scooper"]
console.log(addEnding(["bend", "sharpen", "mean"], "ing")); // ["bending", "sharpening", "meaning"]