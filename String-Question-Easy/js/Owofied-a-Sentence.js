// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(sentence) {
    // let newStr = "";
    // for (let i = 0; i < sentence.length; i++) {
    //     if (sentence[i] === "i") {
    //         newStr += "wi";
    //     } else if (sentence[i] === "e") {
    //         newStr += "we";
    //     } else {
    //         newStr += sentence[i]
    //     }
    // }
    // return newStr + " owo";

    // method
    // let transformed = sentence.replace(/i/g, "wi").replace(/e/g, "we");
    // return transformed + " owo";

    let result = sentence.split('').map(char => {
        if (char === 'i') return 'wi';
        if (char === 'e') return 'we';
        return char;
    }).join('');

    return result + " owo";
}

console.log(owofied("I'm gonna ride 'til I can't no more"));  // "I'm gonna rwidwe 'twil I can't no morwe owo"
console.log(owofied("Do you ever feel like a plastic bag"));  // "Do you wevwer fwewel lwikwe a plastwic bag owo"
console.log(owofied("Cause baby you're a firework"));  // "Causwe baby you'rwe a fwirwework owo"
