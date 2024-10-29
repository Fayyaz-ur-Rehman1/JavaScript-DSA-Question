// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.


function countClaps(str) {

    // return str.split("C").length - 1;

    let matches = str.match(/C/g);
    return matches ? matches.length : 0;

    // let count = 0;
    // let spl = str.split("");
    // for (let i = 0; i < spl.length; i++) {
    //     if (spl[i] === "C") {
    //         count++
    //     }
    // }
    // return count
}

console.log(countClaps("ClaClaClaClap!"));  // 4
console.log(countClaps("ClClClaClaClaClap!"));  // 6
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));  // 9
console.log(countClaps("ap!"));  // 0