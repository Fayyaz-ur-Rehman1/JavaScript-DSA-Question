// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood = "neutral") {
    return `Today, I am feeling ${mood}`;
}

console.log(moodToday("happy")); // "Today, I am feeling happy"
console.log(moodToday("sad"));   // "Today, I am feeling sad"
console.log(moodToday());        // "Today, I am feeling neutral"