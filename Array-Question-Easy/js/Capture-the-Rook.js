// Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture(array) {
    // let [rooks1, rooks2] = array;
    // if (rooks1[0] === rooks2[0] || rooks1[1] === rooks2[1]) return true;
    // return false;

    const [rook1, rook2] = array;
    const [row1, col1] = rook1.split("");
    const [row2, col2] = rook2.split("");
    return row1 === row2 || col1 === col2;
}

console.log(canCapture(["A8", "E8"])); //➞ true
console.log(canCapture(["A1", "B2"])); //➞ false
console.log(canCapture(["H4", "H3"])); //➞ true
console.log(canCapture(["F5", "C8"])); //➞ false