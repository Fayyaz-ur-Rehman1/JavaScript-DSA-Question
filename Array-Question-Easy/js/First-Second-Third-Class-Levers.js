// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.


function determineLever(arr) {
    // if (arr[0] === "e" && arr[1] === "f" && arr[2] === "l") {
    //     return "first class lever";
    // } else if (arr[0] === "e" && arr[1] === "l" && arr[2] === "f") {
    //     return "second class lever";
    // } else if (arr[0] === "f" && arr[1] === "e" && arr[2] === "l") {
    //     return "third class lever";
    // } else {
    //     return "Invalid lever configuration";
    // }

    let resultStore = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[1] === "f") {
            resultStore = "first class lever"
        } else if (arr[1] === "l") {
            resultStore = "second class lever"
        } else if (arr[1] === "e") {
            resultStore = "third class lever"
        }
    }
    return resultStore
}

console.log(determineLever(["e", "f", "l"])); //➞ "first class lever"
console.log(determineLever(["e", "l", "f"])); //➞ "second class lever"
console.log(determineLever(["f", "e", "l"])); //➞ "third class lever"