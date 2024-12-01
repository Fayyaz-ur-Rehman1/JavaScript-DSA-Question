// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.

// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.


function rogerShots(shots) {
    // loop
    // let time = 0;
    // for (let i = 0; i < shots.length; i++) {
    //     if (shots[i] === "Bang!" || shots[i] === "BangBang!") {
    //         time += 0.5
    //     }
    // }
    // return time;

    // let time = 0;
    // let bottles = 0;

    // for (let i = 0; i < shots.length; i++) {
    //     if (shots[i] === "Bang!") {
    //         bottles += 1;
    //         time += 0.5;
    //     } else if (shots[i] === "BangBang!") {
    //         bottles += 2;
    //         time += 0.5;
    //     }
    // }

    // return time;


    // method
    // let bottleShot = 0;
    // let totalTime = shots.reduce((time, shot) => {
    //     if (shot === "Bang!") {
    //         bottleShot += 1;
    //         time += 0.5
    //     } else if (shot === "BangBang!") {
    //         bottleShot += 2;
    //         time += 0.5;
    //     }
    //     return time
    // }, 0);
    // return totalTime

    let bottleShot = 0;
    let totalTime = 0;
    let result = shots.map((elm) => {
        if (elm === "Bang!") {
            bottleShot += 1;
            totalTime += 0.5
        } else if (elm === "BangBang!") {
            bottleShot += 2;
            totalTime += 0.5
        }
        return totalTime;
    })
    return result[result.length - 1]
}

console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])); // 3
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])); // 2.5
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"])); // 2