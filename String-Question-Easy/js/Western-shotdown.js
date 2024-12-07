// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".
// Examples

function showdown(p1, p2) {

    // const delayP1 = p1.search(/\S/); 
    // const delayP2 = p2.search(/\S/); 

    // // Compare delays and determine the winner
    // if (delayP1 < delayP2) {
    //     return "p1";
    // } else if (delayP2 < delayP1) {
    //     return "p2";
    // } else {
    //     return "tie";
    // }


    function countLeadingSpaces(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                break;
            }
            count++;

        }
        return count;

    }

    // Count leading spaces for both strings
    const delayP1 = countLeadingSpaces(p1);
    const delayP2 = countLeadingSpaces(p2);

    // Compare delays and determine the winner
    if (delayP1 < delayP2) {
        return "p1";
    } else if (delayP2 < delayP1) {
        return "p2";
    } else {
        return "tie";
    }
}

console.log(showdown(
    "   Bang!        ",
    "        Bang!   "
)); // "p1"

// p1 draws his gun sooner than p2

console.log(showdown(
    "               Bang! ",
    "             Bang!   "
)); // "p2"

console.log(showdown(
    "     Bang!   ",
    "     Bang!   "
)); // "tie"