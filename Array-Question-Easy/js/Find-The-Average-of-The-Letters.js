// Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

function averageIndex(letter) {
    //loop
    // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let totalSum = 0;
    // for (let i = 0; i < letter.length; i++) {
    //     let index = alphabet.indexOf(letter[i].toUpperCase()) + 1;
    //     totalSum += index;
    // }
    // let average = totalSum / letter.length;
    // return parseFloat(average.toFixed(2));

    // method
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sumTotal = letter.map(letter => alphabet.indexOf(letter.toUpperCase()) + 1)
        .reduce((sum, value) => sum += value, 0);

    let average = sumTotal / letter.length;
    return parseFloat(average.toFixed(2));

}

console.log(averageIndex(["a", "b", "c", "i"])); // 3.75
console.log(averageIndex(["e", "d", "a", "b", "i", "t"])); // 6.83
console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"])); // 12.62