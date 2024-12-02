// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples

function evenOddString(txt) {
    // // loop
    // let even = "";
    // let odd = "";
    // for (let i = 0; i < txt.length; i++) {
    //     if (i % 2 === 0) {
    //         even += txt[i];
    //     } else {
    //         odd += txt[i];
    //     }
    // }
    // return `${even} ${odd}`;

    // method
    // let chars = txt.split("");
    // let evenChars = chars.filter((_, index) => index % 2 === 0).join("");
    // let oddChars = chars.filter((_, index) => index % 2 !== 0).join("");
    // return `${evenChars} ${oddChars}`;

    return txt
        .split("")
        .reduce(
            (acc, char, index) => {
                acc[index % 2] += char;
                return acc;
            },
            ["", ""]
        )
        .join(" ");
}

console.log(evenOddString("mubashir")); // "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space
console.log(evenOddString("edabit")); // "eai dbt"
console.log(evenOddString("airforce")); // "aroc ifre"