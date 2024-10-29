// String Reverse

// with method
function reverseStr(str) {
    return str.split('').reverse().join("");
}
console.log(reverseStr("fayyazurrehman saddiqqureman"));


// with forloop
function reverseStr(str) {
    let storeResult = "";
    for (let i = str.length - 1; i >= 0; i--) {
        storeResult += str[i];
    }
    return storeResult;
}

console.log(reverseStr("fayyazurrehman saddiqqureman"));