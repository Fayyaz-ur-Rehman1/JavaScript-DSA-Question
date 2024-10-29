// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"


function nSidedShape(sides) {
    const shapes = [
        "circle",
        "semi-circle",
        "triangle",
        "square",
        "pentagon",
        "hexagon",
        "heptagon",
        "octagon",
        "nonagon",
        "decagon"
    ];

    // Adjusting input to match the index (1 corresponds to index 0, 2 to index 1, and so on)
    return shapes[sides - 1] || "Invalid number of sides";
}

// Examples
console.log(nSidedShape(3)); // "triangle"
console.log(nSidedShape(1)); // "circle"
console.log(nSidedShape(9)); // "nonagon"


// function nSidedShape(sides) {
//     const shapes = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10: "decagon"
//     };

//     return shapes[sides] || "Invalid number of sides";
// }

// // Examples
// console.log(nSidedShape(3)); // "triangle"
// console.log(nSidedShape(1)); // "circle"
// console.log(nSidedShape(9)); // "nonagon"
