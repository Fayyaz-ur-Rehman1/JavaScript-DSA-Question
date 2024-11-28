// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).


function countCharacters(array) {
    // method
    // let str = array.join("").length;
    // return str

    // return array.reduce((total, current) => total + current.length, 0);

    // loop
    let totalCount = 0;
    for (let i = 0; i < array.length; i++) {
        totalCount += array[i].length
    }
    return totalCount
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