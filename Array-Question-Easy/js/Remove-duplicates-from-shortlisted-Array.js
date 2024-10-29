
function RemoveShortlistedDup(arr){
   let GetArr =  arr.sort((a,b) => a - b );

    let newArr = [];

    for(let i = 0 ;  i < GetArr.length; i++){
        if(GetArr[i] !== GetArr[i + 1]){
            newArr.push(GetArr[i])
        }
    }

    return newArr
}

console.log(RemoveShortlistedDup([10,9,8,7,8,6,2,5,1,4,3,2,1]));
// console.log(RemoveShortlistedDup([1,2,3,4,5,5,6,7]));
