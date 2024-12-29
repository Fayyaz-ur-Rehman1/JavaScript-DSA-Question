// Create a function to extract the name of the subreddit from its URL.

function subReddit(URL) {
    // loop
    // let spl = URL.split("/");
    // let subReddit = "";
    // for(let i = 4; i < spl.length-1; i++){
    //   subReddit += spl[i];
    // }
    // return subReddit;

    // method
    let spl = URL.split("/");
    return spl.slice(4, -1).join("");
}

console.log(subReddit("https://www.reddit.com/r/funny/")); // "funny"
console.log(subReddit("https://www.reddit.com/r/relationships/")); // "relationships"
console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/")); // "mildlyinteresting"