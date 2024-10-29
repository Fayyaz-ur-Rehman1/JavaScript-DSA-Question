function toNumberArray(arr) {
    // return arr.map(e => Number(e))
    // return arr.flatMap(e => Number(e))
    // return arr.reduce((acc, curr) => {
    //     acc.push(Number(curr));
    //     return acc
    // }, [])

    let resultStore = [];
    for (let i = 0; i < arr.length; i++) {
        // resultStore.push(Number(arr[i]));
        resultStore.push(1 * arr[i]);
    }
    return resultStore
}

console.log(toNumberArray(["9.4", "4.2"])); // [9.4, 4.2]
console.log(toNumberArray(["91", "44"])); // [91, 44]
console.log(toNumberArray(["9.5", "8.8"])); // [9.5, 8.8]