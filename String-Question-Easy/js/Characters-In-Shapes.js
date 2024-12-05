// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(shapes) {
    // let totalCharacters = 0;
    // for (let i = 0; i < shapes.length; i++) {
    //     totalCharacters += shapes[i].length
    // }
    // return totalCharacters;

    // method
    // return shapes.reduce((total, row) => total += row.length, 0);
    // let total = 0;
    // shapes.forEach(row => {
    //     total += row.length;
    // });
    // return total;

    // return shapes.map(row => row.length).reduce((total, length) => total + length, 0);
    return shapes.flatMap(row => row.split("")).length;

}

console.log(countCharacters([
    "###",
    "###",
    "###"
])); // 9
console.log(countCharacters([
    "22222222",
    "22222222",
])); // 16
console.log(countCharacters([
    "------------------"
])); // 18
console.log(countCharacters([])); // 0
console.log(countCharacters(["", ""])); // 0