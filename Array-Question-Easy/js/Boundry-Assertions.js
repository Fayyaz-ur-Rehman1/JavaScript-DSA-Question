// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
// Examples

function accepted(array) {
    // loop
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i][0] !== "C") {
    //         result.push(array[i])
    //     }
    // }
    // return result;

    // method
    // return array.filter(elm => elm[0] !== "C");

    return array
        .map(word => ({ word, startsWithC: word[0] === 'C' }))
        .filter(item => !item.startsWithC)
        .map(item => item.word);

}

console.log(accepted(["Ducks", "Bears", "Cats"])); // ["Ducks", "Bears"]
console.log(accepted(["cars", "trucks", "planes"])); // ["cars", trucks", "planes"]
console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"])); // ["Worms", "Bugs", "Beans"]