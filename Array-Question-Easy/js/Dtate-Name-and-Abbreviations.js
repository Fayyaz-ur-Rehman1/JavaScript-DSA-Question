// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full

function filterStateNames(arr, type) {
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (type === "full" && arr[i].length > 2) {
    //         result.push(arr[i])
    //     } else if (type === "abb" && arr[i].length <= 2) {
    //         result.push(arr[i])
    //     }
    // }
    // return result;

    return arr.filter(elm => {
        if (type === "abb") {
            return elm.length === 2;
        } else if (type === "full") {
            return elm.length > 2
        }
        return false
    })
}

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));  //  ["CA", "NY"]
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));  //  ["Arizona", "Nevada"]
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));  //  ["MT", "NJ", "TX", "ID", "IL"]
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));  //  []