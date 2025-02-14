// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(nums) {
    //  for Loop
    // let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     result += nums[i] / nums.length
    // }
    // return Number(result.toFixed(1))

    // method
    // let sum = nums.reduce((acc, num) => acc + num, 0);
    // let average = sum / nums.length;
    // return parseFloat(average.toFixed(1));

    // let sum = 0;
    // nums.forEach(num => sum += num);
    // return parseFloat((sum / nums.length).toFixed(1));

    // return parseFloat((nums.map(num => num).reduce((a, b) => a + b) / nums.length).toFixed(1));

    let sum = eval(nums.join("+"));
    return parseFloat((sum / nums.length).toFixed(1));

}

console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])); // ➞ 7.2
console.log(mean([1, 3, 8, 9, 9, 10])); // ➞ 6.7
console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])); // ➞ 5.9
