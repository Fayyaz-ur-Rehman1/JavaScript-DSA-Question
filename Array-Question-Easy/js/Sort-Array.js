// Bubble Sort With Array
//  A Shorting Algorithm where are largest values bubble up at the top

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 5, 3, 2, 8, 1, -1, 9, 4, 35, 6]));