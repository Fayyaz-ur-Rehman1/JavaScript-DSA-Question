// Write a function that returns the sum of elements greater than 5, in the given array .

function sumFive(arr) {
    // forloop
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            sum += arr[i]
        }
    }
    return sum

    // method
    // return arr.filter(elm => elm > 5).reduce((a, b) => a + b, 0);
    // return arr.map(elm => elm > 5 ? elm : 0).reduce((a, b) => a + b, 0);
    // return arr.flatMap(elm => elm > 5 ? elm : []).reduce((a, b) => a + b, 0);

    // let sum = 0;
    // arr.forEach(element => {
    //     if (element > 5) {
    //         sum += element
    //     }
    // });
    // return sum
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18])); // 77
console.log(sumFive([1, 2, 3, 4])); // 0
console.log(sumFive([10, 12, 28, 47, 55, 100])); // 252