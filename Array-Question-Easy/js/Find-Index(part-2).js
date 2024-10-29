// Create a function that finds the index of a given item.
function search(arr, index) {
    //  for(let i = 0; i < arr.length ; i++){
    //     if(arr[i] == index){
    //         return i
    //     }
    //  }
    //  return -1

    return arr.findIndex((arr) => {
        return arr == index
    })
}
console.log(search([1, 5, 3], 5));  // 1
console.log(search([9, 8, 3], 3));  // 2
console.log(search([1, 2, 3], 4));  // -1