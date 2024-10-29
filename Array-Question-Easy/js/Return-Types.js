// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
    //  return arr.map(e => typeof e);
    return arr.flatMap(e => typeof e);

    // let resultStore= [];
    // for (let i = 0; i < arr.length; i++) {
    //    resultStore.push(typeof arr[i]);
    // }
    // return resultStore
}

console.log(arrayValuesTypes([1, 2, "null", []])); // ["number", "number", "string", "object"]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])); // ["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])); // ["number", "string", "string", "object", "object", "boolean", "number"]