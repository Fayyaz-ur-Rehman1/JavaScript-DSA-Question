// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

function nthSmallest(arr, n) {
    // for loop

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    if (n > 0 && n <= arr.length) {
        return arr[n - 1];
    } else {
        return null;
    }


    // method
    // const sortArray = arr.sort((a, b) => a - b);
    // if (n > 0 && n <= sortArray.length) {
    //     return sortArray[n - 1];
    // } else {
    //     return null;
    // }


}

console.log(nthSmallest([1, 3, 5, 7], 1)); //  1
console.log(nthSmallest([1, 3, 5, 7], 3)); //  5
console.log(nthSmallest([1, 3, 5, 7], 5)); //  null
console.log(nthSmallest([7, 3, 5, 1], 2)); //  3