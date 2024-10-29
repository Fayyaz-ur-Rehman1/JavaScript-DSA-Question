// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.



function trimmedAverages(array) {
    // let max = Math.max(...array);
    // let min = Math.min(...array);
    // let sum = 0;
    // let count = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== max && array[i] !== min) {
    //         sum += array[i];
    //         count++
    //     }
    // }

    // if (count === 0) {
    //     return array[0];
    // }

    // let avg = sum / count
    // return avg


    let max = Math.max(...array);
    let min = Math.min(...array);
    let filter_Array = array.filter(elm => elm !== max && elm !== min);
    if (filter_Array.length === 0) {
        filter_Array = array
    }
    let sum = filter_Array.reduce((acc, curr) => acc + curr, 0)
    let avg = sum / filter_Array.length;
    return avg
}

console.log(trimmedAverages([4, 5, 7, 100])); // 6
// Average of 5 and 7
console.log(trimmedAverages([10, 25, 5, 15, 20])); // 15
// Average of 10, 15 and 20
console.log(trimmedAverages([1, 1, 1])); // 1
// 1