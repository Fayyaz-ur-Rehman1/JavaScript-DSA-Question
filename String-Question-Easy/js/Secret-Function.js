// Create a function based on the input and output. Look at the examples, there is a pattern.

function secret(tag) {
    // let [a,b] = tag.split("*");
    // return `<${a}></${a}>`.repeat(b)

    let arr = tag.split('*');
    return `<${arr[0]}></${arr[0]}>`.repeat(arr[1]);
}

console.log(secret("div*2"));  // "<div></div><div></div>"
console.log(secret("p*1"));  // "<p></p>"
console.log(secret("li*3"));  // "<li></li><li></li><li></li>"