// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

function binaryToDecimal(binary) {
    // let decimal = 0;
    // let length = binary.length;
    // // console.log(length);/

    // for (let i = 0; i < length; i++) {
    //     // Get the binary value at position i
    //     let binaryValue = binary[i];
    //     console.log(Math.pow(2, length - 1 - i));

    //     // Calculate its decimal equivalent based on its position from the right
    //     decimal += binaryValue * Math.pow(2, length - 1 - i);
    // }

    // return decimal;

    let decimal = 0;
    let length = binary.length;

    for (let i = 0; i < length; i++) {
        let bit = parseInt(binary[length - 1 - i]);
        decimal += bit * Math.pow(2, i);
    }

    return decimal;
}

console.log(binaryToDecimal([0, 0, 0, 1])); // 1
console.log(binaryToDecimal([0, 0, 1, 0])); // 2
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])); // 1005