// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(array) {
    // let diffrence = array[1] - array[0];
    // let next = array[array.length - 1] + diffrence;
    // return next;

    let difference = 0;
    array.forEach((num, i) => {
        if (i < array.length - 1) {
            difference = array[i + 1] - array[i];
        }
    });
    return array[array.length - 1] + difference;
}

console.log(nextElement([3, 5, 7, 9])); // 11
console.log(nextElement([-5, -6, -7])); // -8
console.log(nextElement([2, 2, 2, 2, 2])); // 2