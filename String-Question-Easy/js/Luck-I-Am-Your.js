// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(str) {
    let luck = "Luck I am you "
    switch (str) {
        case "Darth Vader":
            return `${luck} father`

        case "Person":
            return `${luck} Relation`

        case "Leia":
            return `${luck} sister`

        case "Han":
            return `${luck} brother in law`

        case "R2D2":
            return `${luck} droid`
    }
}
console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
console.log(relationToLuke("Leia")); // "Luke, I am your sister."
console.log(relationToLuke("Han")); // "Luke, I am your brother in law."

// function relationToLuke(str) {
//     let luck = "Luke, I am your ";

//     if (str === "Darth Vader") {
//         return `${luck}father.`;
//     } else if (str === "Leia") {
//         return `${luck}sister.`;
//     } else if (str === "Han") {
//         return `${luck}brother in law.`;
//     } else if (str === "R2D2") {
//         return `${luck}droid.`;
//     } else {
//         return "Relation unknown.";
//     }
// }

// console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
// console.log(relationToLuke("Leia"));        // "Luke, I am your sister."
// console.log(relationToLuke("Han"));         // "Luke, I am your brother in law."
// console.log(relationToLuke("R2D2"));        // "Luke, I am your droid."
