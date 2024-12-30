// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).


function isSafeBridge(str) {
    // loop
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            return false;
        }
    }
    return true;

    // method
    // return !str.includes(" ");
    // return str.replace(/#/g, '').length === 0;
}

console.log(isSafeBridge("####")); // true
console.log(isSafeBridge("## ####")); // false
console.log(isSafeBridge("#")); // true