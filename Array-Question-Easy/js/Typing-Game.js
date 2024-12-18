// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

function compareTypeWords(userArray, correctArray) {
    // return userArray.map((word, index) => word === correctArray[index] ? 1 : -1);

    const result = [];
    userArray.forEach((word, index) => {
        result.push(word === correctArray[index] ? 1 : -1);
    });
    return result;
}

const userTyped = ["cat", "blue", "skt", "umbrells", "paddy"];
const correctWords = ["cat", "blue", "sky", "umbrella", "paddy"];
// const result = compareTypeWords(userTyped, correctWords);
console.log(compareTypeWords(userTyped, correctWords)); // Output: [1, 1, -1, -1, 1]

// console.log(result);  // Output: [1, 1, -1, -1, 1]