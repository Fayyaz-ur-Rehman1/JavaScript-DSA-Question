// Create a function that counts how many D's are in a sentence.


function countDs(sentence) {
    // let count = 0;
    // sentence.split("").forEach(function (e) {
    //     if (e === "d" || e === "D") {
    //         count++;
    //     }
    // });
    // return count;


    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "d" || sentence[i] === "D") {
            count++
        }
    }
    return count
}

console.log(countDs("My friend Dylan got distracted in school."));  // 4
console.log(countDs("Debris was scattered all over the yard."));  // 3
console.log(countDs("The rodents hibernated in their den."));  // 3