// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(str) {
    if (str) {
        return `Do not ${str}.`
    }
}
console.log(reversePsychology("wash the dishes")); // "Do not wash the dishes."
console.log(reversePsychology("eat your lunch")); // "Do not eat your lunch."
console.log(reversePsychology("go to school")); // "Do not go to school."