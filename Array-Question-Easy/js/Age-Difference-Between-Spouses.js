// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

function ageDifference(ages) {
    // Sort the array in descending order to find the two oldest ages (the parents)
    let sortedAges = ages.sort((a, b) => b - a);
    // Get the ages of the two oldest people (the parents)
    let parent1 = sortedAges[0];
    let parent2 = sortedAges[1];

    // // Calculate the age difference between the two parents
    let difference = Math.abs(parent1 - parent2);
    // // Return the appropriate message
    if (difference === 0) {
        return "No age difference between spouses.";
    } else if (difference === 1) {
        return "1 year";
    } else {
        return difference + " years";
    }

}

// Test cases
console.log(ageDifference([29, 1, 6, 8, 28])); // ➞ "1 year"
console.log(ageDifference([43, 86, 49, 86])); // ➞ "No age difference between spouses."
console.log(ageDifference([2, 4, 6, 32, 27])); // ➞ "5 years"