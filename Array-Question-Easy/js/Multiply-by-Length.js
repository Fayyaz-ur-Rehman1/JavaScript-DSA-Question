// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(array) {
    // loop
    // const length = array.length;
    // let multiplyValues = [];
    // for (let i = 0; i < array.length; i++) {
    //     multiplyValues.push(array[i] * length);
    // }
    // return multiplyValues;

    // method
    // const length = array.length;
    // return  array.map(elm => elm * length);

    let length = array.length;
    return array.reduce((acc, curr) => {
        acc.push(curr * length);
        return acc;
    }, []);
}

console.log(multiplyByLength([2, 3, 1, 0])); // [8, 12, 4, 0]
console.log(multiplyByLength([4, 1, 1])); // ([12, 3, 3])
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])); //  [7, 0, 21, 21, 49, 14, 7]
console.log(multiplyByLength([0])); // ([0])