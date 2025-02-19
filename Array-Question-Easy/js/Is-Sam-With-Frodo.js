// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
    // loop
    // for (let i = 0; i < arr.length; i++) {
    //     if ((arr[i] === "Frodo" && arr[i + 1] === "Sam") || (arr[i] === "Sam" && arr[i + 1] === "Frodo")) {
    //         return true
    //     }
    // }
    // return false

    // method
    // let str = arr.join(" ")
    // return str.includes("Sam Frodo") || str.includes("Frodo Sam")

    return arr.some((elm, i) => {
        return (elm === "Sam" && arr[i + 1] === "Frodo") || (elm === "Frodo" && arr[i + 1] === "Sam")
    })
}

console.log(middleEarth(["Frodo", "Sam", "Gandalf"])); // ➞ true
console.log(middleEarth(["Frodo", "Saruman", "Sam"])); // ➞ false
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])); // ➞ true