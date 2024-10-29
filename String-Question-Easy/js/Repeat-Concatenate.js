// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.


function frontThree(str) {
    // return str.slice(0,3).repeat(3)


    // let resultStore = "";
    // let frontLatter = str.slice(0, 3)
    // for (let i = 0; i < 3; i++) {
    //     resultStore += frontLatter
    // }
    // return resultStore


    let resultStore = "";
    let frontLatter = "";
    for (let i = 0; i < 3; i++) {
        frontLatter += str[i]
    }
    for (let j = 0; j < 3; j++) {
        resultStore += frontLatter
    }
    return resultStore
}

console.log(frontThree("Python")); // "PytPytPyt"
console.log(frontThree("Cucumber")); // "CucCucCuc"
console.log(frontThree("bioshock")); // "biobiobio"