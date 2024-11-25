// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

function ageDifference(ages) {
    let maxAge = ages[0];
    let secondMaxAge = -Infinity;
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > maxAge) {
            secondMaxAge = maxAge;
            maxAge = ages[i];
        } else if (ages[i] > secondMaxAge) {
            secondMaxAge = ages[i];
        }
    }

    let difference = maxAge - secondMaxAge;
    if (difference === 0) {
        return "No age difference between spouses.";
    } else {
        return `${difference} years`
    }



    // method
    // let [parent1, parent2] = ages.sort((a, b) => b - a);
    // let difference = parent1 - parent2;
    // if (difference === 0) {
    //     return "No age difference between spouses.";
    // } else {
    //     return `${difference} years`
    // }
}

// Test cases
console.log(ageDifference([29, 1, 6, 8, 28])); // ➞ "1 year"
console.log(ageDifference([43, 86, 49, 86])); // ➞ "No age difference between spouses."
console.log(ageDifference([2, 4, 6, 32, 27])); // ➞ "5 years"