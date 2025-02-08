// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]

function evenOddPartition(array) {
    let evens = [];
    let odds = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i])
        } else {
            odds.push(array[i])
        }
    }
    return [evens, odds]

    // method
    // const even = array.filter(elm => elm % 2 === 0)
    // const odd = array.filter(elm => elm % 2 !== 0)
    // return [even, odd]

    // return array.reduce((acc, num) => {
    //     acc[num % 2 === 0 ? 0 : 1].push(num);
    //     return acc;
    // }, [[], []]);

    // return [
    //     array.map(num => num % 2 === 0 ? num : null).filter(num => num !== null),
    //     array.map(num => num % 2 !== 0 ? num : null).filter(num => num !== null)
    // ];

    // let evens = [], odds = [];
    // array.forEach(num => (num % 2 === 0 ? evens : odds).push(num));
    // return [evens, odds];
}

console.log(evenOddPartition([5, 8, 9, 2, 0])); //➞ [[8, 2, 0], [5, 9]]
console.log(evenOddPartition([1, 0, 1, 0, 1, 0])); //➞ [[0, 0, 0], [1, 1, 1]]
console.log(evenOddPartition([1, 3, 5, 7, 9])); //➞ [[], [1, 3, 5, 7, 9]]
console.log(evenOddPartition([])); //➞ [[], []]