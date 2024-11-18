function takeValStart(arr, val) {
    // forloop

    // const result = [];
    // const startIndex = arr.indexOf(val);
    // for (let i = startIndex; i < arr.length; i++) {
    //     result.push(arr[i])
    // }
    // return result

    
    // method 

    // const index = arr.indexOf(val);
    // return arr.map((elm, i) => (i >= index ? elm : null)).filter(elm => elm !== null);

    const startIndex = arr.findIndex(elm => elm === val);
    return startIndex !== -1 ? arr.slice(startIndex) : [];
}
console.log(takeValStart([1, -2, 0, 3, 4, 0, 5], 0)); // [0, 3, 4, 0, 5]
console.log(takeValStart([1, -2, 4, 0, 5], 4));       // [4, 0, 5]
console.log(takeValStart([1, -2, 0, 3, 4, 0, 5], 3)); // [3, 4, 0, 5]