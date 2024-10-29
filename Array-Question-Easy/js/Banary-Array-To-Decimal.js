// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

function binaryToDecimal(binary) {
    // const binaryStr = binary.join("");
    // const dicemalValue = parseInt(binaryStr, 2);
    // return dicemalValue

    // return binary.reduce((acc, bit) => (acc * 2) + bit, 0);

    // let str = binary.join("");
    // let binaryLength = binary.length
    // let decimalValue = 0;
    // for (let i = 0; i < binaryLength; i++) {
    //     decimalValue += binary[i] * Math.pow(2, binaryLength - 1 - i)
    // }
    // return decimalValue


    let decimalValue = 0;

    // Loop through the binary array
    for (let i = 0; i < binary.length; i++) {
        // Multiply accumulator by 2 and add the current bit
        decimalValue = decimalValue * 2 + binary[i];
    }

    return decimalValue;
}

console.log(binaryToDecimal([0, 0, 0, 1])); // 1
console.log(binaryToDecimal([0, 0, 1, 0])); // 2
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])); // 1005