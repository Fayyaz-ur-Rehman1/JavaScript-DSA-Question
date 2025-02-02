// Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// function calcDeterminant(matrix) {
//     return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
// }

function calcDeterminant([[a, b], [c, d]]) {
    return (a * d) - (b * c);
}

console.log(calcDeterminant([
    [1, 2],
    [3, 4]
])); // -2

console.log(calcDeterminant([
    [5, 3],
    [3, 1]
])); // -4

console.log(calcDeterminant([
    [1, 1],
    [1, 1]
])); // 0