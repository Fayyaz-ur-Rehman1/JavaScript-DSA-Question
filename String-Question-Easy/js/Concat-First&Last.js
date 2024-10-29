// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(str1, str2) {
    // return str1.concat(", ", str2);
    // return `${str1}, ${str2}`
    // return str1 + ", " + str2

    let resultStore = "";
    for (let i = 0; i < str1.length; i++) {
        resultStore += str1[i];
    }
    resultStore += ", ";
    for (let j = 0; j < str2.length; j++) {
        resultStore += str2[j];
    }

    return resultStore;
}

console.log(concatName("First", "Last")); // "Last, First"
console.log(concatName("John", "Doe")); // "Doe, John"
console.log(concatName("Mary", "Jane")); // "Jane, Mary"