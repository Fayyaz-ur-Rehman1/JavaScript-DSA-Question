// Write a function that converts hours into seconds.
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

function  howManySeconds(hour){
    return hour * 60 * 60;
}

console.log(howManySeconds(2));// 7200
console.log(howManySeconds(10));// 36000
console.log(howManySeconds(24));// 86400