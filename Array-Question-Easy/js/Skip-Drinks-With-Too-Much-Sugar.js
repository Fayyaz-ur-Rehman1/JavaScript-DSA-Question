// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
// cola
// fanta
function skipTooMuchSugarDrinks(arr) {
    return arr.filter(elm => elm !== "fanta" && elm !== "cola");
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== "fanta" && arr[i] !== "cola") {
    //         result.push(arr[i]);
    //     }
    // }
    // return result
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])); // ["water"]
console.log(skipTooMuchSugarDrinks(["fanta", "cola"])); // []
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])); // ["lemonade", "beer", "water"]