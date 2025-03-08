// *
// **
// ***
// ****

// for (let i = 1; i < 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern)
// }


//    *
//   ***
//  *****
// *******

// let triPattern = "";
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4 - i; j++) {
//         triPattern += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         triPattern += "*";
//     }
//     triPattern += "\n";
// }
// console.log(triPattern);

// *****
// *   *
// *   *
// *   *
// *****

// let patchesSquare = "";

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i === 1 || j === 1) {
//             patchesSquare += "*";
//         } else if (i === 5 || j === 5) {
//             patchesSquare += "*"
//         } else {
//             patchesSquare += " "
//         }
//     }
//     patchesSquare += "\n"
// }
// console.log(patchesSquare)

// 1
// 22
// 333
// 4444
// 55555

// let countPattern = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         countPattern += i
//     }
//     countPattern += "\n";
// }
// console.log(countPattern)

// 1
// 12
// 123
// 1234
// 12345

// let countPattern = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         countPattern += j
//     }
//     countPattern += "\n";
// }
// console.log(countPattern)

// *****
// ****
// ***
// **
// *

// let countPattern = "";
// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         countPattern += "*";
//     }
//     countPattern += "\n";
// }
// console.log(countPattern)