// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(str){
    // return `something ${str}`
    // return "something " + str
//    let newstr = "something ";
//    return newstr.concat(str);
//    return "something ".padEnd(10) + str

// with loop
let newstr = "something ";
for(let i = 0; i< str.length; i++){
    newstr += str[i]
}
return newstr
}

console.log(giveMeSomething("is better than nothing")); // "something is better than nothing"
console.log(giveMeSomething("Bob Jane")); // "something Bob Jane"
console.log(giveMeSomething("something")); // "something something"