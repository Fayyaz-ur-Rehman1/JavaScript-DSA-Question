
function RemoveShortlistedDup(arr) {
    let sortArray = arr.sort((a, b) => a - b);

    // forloop
    let result = [];
    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] !== sortArray[i + 1]) {
            result.push(sortArray[i]);
        }
    }
    return result

    // method
    // return sortArray.filter((itmes, index) => itmes !== sortArray[index + 1]);
    // return [...new Set(sortArray)]
}
// console.log(RemoveShortlistedDup([5, 1, 3, 2, 4]));

console.log(RemoveShortlistedDup([10, 9, 8, 7, 8, 6, 2, 5, 1, 4, 3, 2, 1]));
// console.log(RemoveShortlistedDup([1,2,3,4,5,5,6,7]));
