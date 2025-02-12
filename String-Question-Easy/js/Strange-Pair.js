// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
    // if (str1 === "" && str2 === "") return true;
    // if (str1.length === 0 || str2.length === 0) return false;
    // return str1[0] === str2[str2.length - 1] && str1[str1.length - 1] === str2[0];

    if (str1 === "" && str2 === "") return true;
    if (str1.length === 0 || str2.length === 0) return false;

    return str1.charAt(0) === str2.charAt(str2.length - 1) &&
        str1.charAt(str1.length - 1) === str2.charAt(0);
}


console.log(isStrangePair("ratio", "orator")); // true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
console.log(isStrangePair("sparkling", "groups")); // true
console.log(isStrangePair("bush", "hubris")); // false
console.log(isStrangePair("", "")); // true
