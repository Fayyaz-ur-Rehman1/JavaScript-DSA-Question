// Create a function that returns a number, based on the string provided. Here is a list of all digits:


// function word(str) {
//     switch (str) {
//         case "one":
//             return 1

//         case "two":
//             return 2

//         case "three":
//             return 3

//         case "four":
//             return 4

//         case "five":
//             return 5

//         case "six":
//             return 6

//         case "seven":
//             return 7

//         case "eight":
//             return 8

//         case "nine":
//             return 9

//         case "zero":
//             return 0

//         default:
//             console.log("enter you number");

//     }
// }

// console.log(word("one")); // 1
// console.log(word("two")); // 2
// console.log(word("nine")); // 9

function word(str) {
    const numberMap = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0
    };

    return numberMap[str] !== undefined ? numberMap[str] : "Enter a valid number word";
}

console.log(word("one"));  // 1
console.log(word("two"));  // 2
console.log(word("nine")); // 9
console.log(word("ten"));  // Enter a valid number word
