// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.



function trimmedAverages(array) {
    let min = +Infinity;
    let max = -Infinity;
    let sum = 0;
    // forloop
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        if (array[i] < min) min = array[i]
        if (array[i] > max) max = array[i]
    }
    sum -= min
    sum -= max

    let remainingCount = array.length - 2;
    return sum / remainingCount

    // method
    // let sortAsc = array.sort((a, b) => a - b);
    // let removeMinMaxValue = sortAsc.slice(1, sortAsc.length - 1);
    // let sum = removeMinMaxValue.reduce((total, num) => total + num, 0);
    // let average = sum / removeMinMaxValue.length;
    // return average
}

console.log(trimmedAverages([4, 5, 7, 100])); // 6
// Average of 5 and 7
console.log(trimmedAverages([10, 25, 5, 15, 20])); // 15
// Average of 10, 15 and 20
console.log(trimmedAverages([1, 1, 1])); // 1
// 1