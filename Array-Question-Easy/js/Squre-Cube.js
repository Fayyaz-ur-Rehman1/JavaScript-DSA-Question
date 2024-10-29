// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    if (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) {
        return true
    }
    return false
}


console.log(checkSquareAndCube([4, 8])); // true
console.log(checkSquareAndCube([16, 48])); //false
console.log(checkSquareAndCube([9, 27])); // true