// with method 
function maxArr(arr){
    return Math.max(...arr) ;
}
console.log(maxArr([1,2,7,3,6,4]));

// function minimumArr(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min
// }
// console.log(minimumArr([7, 2, 5, 1, 6, 7]));

function minimumArr(arr){
  let min = Infinity;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
  }
  return min
}
console.log(minimumArr([7, 2, 5, 1, 6, 7]));