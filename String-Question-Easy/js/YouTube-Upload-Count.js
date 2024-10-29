// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

function uploadCount(array, month) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(month)) {
            count++
        }
    }
    return count
}

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // 2
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); // 1