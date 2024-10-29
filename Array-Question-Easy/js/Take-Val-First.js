function takeValStart(arr, val) {
    let resultStore = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === val) {
            resultStore.push(arr[j]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            resultStore.push(arr[i]);
        }
    }
    return resultStore
}
console.log(takeValStart([1, -2, 0, 3, 4, 0, 5], 0));
console.log(takeValStart([1, -2, 4, 0, 5], 4));
console.log(takeValStart([1, -2, 0, 3, 4, 0, 5], 3));