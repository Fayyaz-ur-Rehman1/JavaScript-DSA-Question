// Write a function that returns the length of a string. Make your function recursive.


function length(str) {
    // return str.length

    // let strLength = 0
    // for (let i = 0; i < str.length; i++) {
    //     strLength += str[i].length
    // }
    // return strLength

    if(str.length == 0){
        return 0
    }
    return str.length + length(str.length)
}

console.log(length("apple")); // 5
console.log(length("make")); // 4
console.log(length("a")); // 1
console.log(length("")); // 0