// Create a function that adds a string ending to each member in an array.


function addEnding(array, string) {
    // loop
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     result.push(array[i] += string);
    // }
    // return result

    // method
    // return array.map(word => word + string);
    // return array.reduce((word , currWord) => {
    //     word.push(currWord + string);
    //     return word
    // },[]);
    const result = [];
    array.forEach(word => result.push(word + string));
    return result;
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")); // ["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding(["new", "pander", "scoop"], "er")); // ["newer", "panderer", "scooper"]
console.log(addEnding(["bend", "sharpen", "mean"], "ing")); // ["bending", "sharpening", "meaning"]