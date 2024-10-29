// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function concatenateValues(obj) {
    const value = Object.values(obj);
    const secondValue = value[1];
    return value.concat(secondValue).join(" ");
}

console.log(concatenateValues({ 1: "Mommy", 2: "please", 3: "help" }));  // "Mommy please help please"
console.log(concatenateValues({ 1: "Me", 2: "innocent", 3: "is" }));    // "Me innocent is innocent"
console.log(concatenateValues({ 1: "Must", 2: "lawyer", 3: "call" }));  // "Must lawyer call lawyer"