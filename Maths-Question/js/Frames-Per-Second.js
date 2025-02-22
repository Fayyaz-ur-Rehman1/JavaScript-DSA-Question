// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
    return minutes * 60 * fps
}

console.log(frames(1, 1)); //➞ 60
console.log(frames(10, 1)); //➞ 600
console.log(frames(10, 25)); //➞ 15000