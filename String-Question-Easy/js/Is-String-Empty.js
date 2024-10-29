// Create a function that returns true if a string is empty and false otherwise.



function isEmpty(str) {

    // with method
    return str.length > "" ? false : true

    // if(str.length == 0){
    //     return true
    // }else{
    //     return false
    // }

    // with loop
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i].length > "") {
    //         return false
    //     }
    // }
    // return true
}

console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // false
console.log(isEmpty("a")); // false