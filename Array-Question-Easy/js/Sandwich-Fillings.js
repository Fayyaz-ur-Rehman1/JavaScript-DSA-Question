// Given a sandwich(as an array), return an array of fillings inside the sandwich.This involves ignoring the first and last elements.

function getFillings(sandwich) {
    // let fillings = [];
    // for (let i = 1; i < sandwich.length - 1; i++) {
    //     fillings.push(sandwich[i]);
    // }
    // return fillings;
    // return sandwich.slice(1, sandwich.length - 1);
    return sandwich.filter((item, index) => index !== 0 && index !== sandwich.length - 1);
}

console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"])); //["ham", "cheese", "ham"]
console.log(getFillings(["bread", "sausage", "tomato", "bread"])); //["sausage", "tomato"]
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])); //["lettuce", "bacon", "tomato"]