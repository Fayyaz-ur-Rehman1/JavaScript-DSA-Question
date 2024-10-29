// Given a string, return true if its length is even or false if the length is odd.


function oddOrEven(str) {
    // for (let i = 0; i < str.length; i++) {
    //     if (str.length % 2 === 0) {
    //         return true
    //     }
    // }
    // return false

    // if(str.length%2===0){
    //     return true 
    // }else{
    //    return false
    // }

    return str.length % 2 == 0 ? true : false
}

console.log(oddOrEven("apples"));// ➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.
console.log(oddOrEven("pears"));// ➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.
console.log(oddOrEven("cherry")); //➞ true