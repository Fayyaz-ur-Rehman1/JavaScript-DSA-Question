// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0)
}

console.log(footballPoints(3, 4, 2)); // ➞ 13
console.log(footballPoints(5, 0, 2)); // ➞ 15
console.log(footballPoints(0, 0, 1)); // ➞ 0