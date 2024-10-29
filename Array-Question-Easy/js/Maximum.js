// with method 
function maxArr(arr){
    return Math.max(...arr) ;
}
console.log(maxArr([1,2,7,3,6,4]));


// function arrMaxValue(arr) {
//     let newArr = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr < arr[i]) {
//             console.log(arr[i]);
//             newArr = arr[i]
//         }
//     }
//     return newArr
// }
// console.log(arrMaxValue([1, 3, 2, 4, 6, 5]));

function arrMaxValue(arr) {
    let max = -Infinity; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
  
    return max; 
  }
  
  console.log(arrMaxValue([1, 3, 2, 4, 6, 5])); 
  