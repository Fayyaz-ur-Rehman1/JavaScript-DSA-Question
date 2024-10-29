// Create a function that returns the selected filename from a path. Include the extension in your answer.


function getFilename(filename) {
    // let result = "";
    // let spl = filename.split("/");
    // for (let i = spl.length - 1; i < spl.length; i++) {
    //     result += spl[i]
    // }
    // return result

    let spl = filename.split("/");
    return spl.slice(-1).join("");
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")); //"edabit.txt"
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")); //"Beethoven_5.mp3"
console.log(getFilename("ffprobe.exe")); //"ffprobe.exe"