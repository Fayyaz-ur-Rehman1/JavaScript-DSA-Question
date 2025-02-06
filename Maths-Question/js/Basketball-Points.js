// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threeProinters) {
    return (2 * twoPointers) + (3 * threeProinters)
}

console.log(points(1, 1)); //➞ 5
console.log(points(7, 5)); //➞ 29
console.log(points(38, 8)); //➞ 100