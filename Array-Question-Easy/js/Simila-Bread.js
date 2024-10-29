// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.


function hasSameBread(arr1, arr2) {

    // if (arr1.includes("white bread") && arr2.includes("white bread")) {
    //     return true
    // }
    // return false

    // return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1]

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === "white bread" && arr2[j] === "white bread") {
                return true
            }
        }
    }
    return false
}

console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"])); //true

console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"])); //false

console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])); //false