function findDifference(a, b) {
    // const volumeA = a[0] * a[1] * a[2];
    // const volumeB = b[0] * b[1] * b[2];
    // return volumeA - volumeB;

    // let multi = a.reduce((a,b)=>{
    //     return a *b
    //   }) 
    //   let multiple = b.reduce((a,b)=>{
    //     return a*b
    //   })
      
    //   return Math.abs(multi- multiple);\

    let volumeA = 1;
    let volumeB = 1;

    for (let i = 0; i < a.length; i++) {
        volumeA *= a[i];
    }

    for (let i = 0; i < b.length; i++) {
        volumeB *= b[i];
    }
    return Math.abs(volumeA - volumeB);
      
}

// Test cases
console.log(findDifference([28, 16, 29], [7, 8, 17]));  // Output: 12040
console.log(findDifference([9, 22, 18], [16, 24, 10])); // Output: 276
console.log(findDifference([1, 9, 25], [10, 7, 9]));    // Output: 405
console.log(findDifference([7, 6, 16], [26, 9, 26]));   // Output: 5412