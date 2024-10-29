// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.


function createID(first, last) {
    // let firstLatter = first[0].toLowerCase();
    // let secondLatter = last.slice(0, 1).toUpperCase();
    // let twoLatter = last.slice(1, 3).toLowerCase()
    // return `${firstLatter}${secondLatter}${twoLatter}`


    let str = "";
    for (let i = 0; i < 1; i++) {
        str += first[i].toLowerCase();
    }

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            str += last[i].toUpperCase();
        } else {
            str += last[i].toLowerCase();
        }
    }
    return str
}

console.log(createID("mary", "lamb")); // "mLam"
console.log(createID("John", "SMITH")); // "jSmi"
console.log(createID("mary", "smith")); // "mSmi"