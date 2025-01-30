// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

function formatDate(date) {
    let formatedDate = date.split("/");
    let result = "";
    for (let i = formatedDate.length - 1; i >= 0; i--) {
        result += formatedDate[i];
    }
    return result

    // return date.split("/").reverse().join("");
    // let [mm, dd, yyyy] = date.split("/");
    // return `${yyyy}${dd}${mm}`;

}

console.log(formatDate("11/12/2019")); // "20191211"
console.log(formatDate("12/31/2019")); // "20193112"
console.log(formatDate("01/15/2019")); // "20191501"