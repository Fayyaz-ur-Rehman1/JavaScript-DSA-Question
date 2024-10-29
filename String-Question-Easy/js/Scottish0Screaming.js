// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.


function toScottishScreaming(str) {

    // return str
    // .replace(/[aeiou]/gi, (vowel) => {
    //  
    //     switch (vowel.toLowerCase()) {
    //         case 'a':
    //             return 'E';
    //         case 'e':
    //             return 'E';
    //         case 'i':
    //             return 'E';
    //         case 'o':
    //             return 'E';
    //         case 'u':
    //             return 'E';
    //         default:
    //             return vowel;
    //     }
    // })
    // .toUpperCase();

    let vowels = ["a", "e", "i", "o", "u"];
    let resultStore = "";

    for (let i = 0; i < str.length; i++) {

        let char = str[i].toLowerCase();

        if (vowels.includes(char)) {
            resultStore += "e";
        } else {
            resultStore += str[i];
        }
    }
    return resultStore.toUpperCase()

}

console.log(toScottishScreaming("hello world")); // "HELLE WERLD"
console.log(toScottishScreaming("Mr. Fox was very naughty")); // "MR. FEX WES VERY NEEGHTY"
console.log(toScottishScreaming("Butterflies are beautiful!")); // "BETTERFLEES ERE BEEETEFEL!"