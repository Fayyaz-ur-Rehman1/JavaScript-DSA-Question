// Create a function that evaluates an equation.\

function eq(str){
    return eval(str)
}
console.log(eq("1+2")); // 3
console.log(eq("6/(9-7)")); // 3
console.log(eq("3+2-4")); // 1