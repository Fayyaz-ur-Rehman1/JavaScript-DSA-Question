// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
    return (hours * 60 * 60) + (minutes * 60)
}

console.log(convert(1, 3));  //➞ 3780
console.log(convert(2, 0));  //➞ 7200
console.log(convert(0, 0));  //➞ 0