// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems(arr) {
    // with forloop
    // let resultStore = [];
    // for (let i = 0; i < arr.length; i++) {
    //     resultStore.push(arr[i] + 1)
    // }
    // return resultStore

    // with method
    // return arr.map(elm => elm+1)
    // return arr.reduce((acc, curr) => {
    //     acc.push(curr + 1);
    //     return acc
    // }, [])
}
console.log(incrementItems([0, 1, 2, 3]));  // [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8]));  // [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4]));  // [0, -1, -2, -3]