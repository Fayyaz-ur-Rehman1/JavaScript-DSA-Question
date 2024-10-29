// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr) {
    // return arr.map(e => e * 2);
    // return arr.flatMap(e => e * 2);
    //    return arr.reduce((acc,curr)=>{
    //      acc.push(curr * 2)
    //      return acc
    //    },[])

    let resulStore = [];
    for (let i = 0; i < arr.length; i++) {
        resulStore.push(arr[i] * 2)
    }
    return resulStore
}

console.log(getMultipliedArr([2, 5, 3])); // [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5])); // [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0])); // [10, 764, 0]