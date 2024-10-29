// Create a function that takes an array containing only numbers and return the first element.


function getFirstValue(arr) {
    // return arr.shift();
    // return arr[0];
    //    let a=0
    for (let i = 0; i < arr.length; i++) {
        return arr[i]; // Return the first element and exit the loop
    }
}

console.log(getFirstValue([1, 2, 3])); // 1
console.log(getFirstValue([80, 5, 100])); // 80
console.log(getFirstValue([-500, 0, 50])); // -500