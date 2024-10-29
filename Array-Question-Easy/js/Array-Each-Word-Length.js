// Create a function that takes an array of words and transforms it into an array of each word's length.


function wordLengths(arr) {
    // return arr.map(e => e.length);
    // return arr.flatMap(e => e.length);
    // return arr.reduce((accu, curr) => {
    //     accu.push(curr.length);
    //     return accu
    // }, []);

    let resultStore = [];
    for (let i = 0; i < arr.length; i++) {
        resultStore.push(arr[i].length)
    }
    return resultStore
}

console.log(wordLengths(["hello", "world"])); // [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); // [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); // [3, 5, 9, 4, 2, 3, 8]