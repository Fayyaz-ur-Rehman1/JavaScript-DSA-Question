// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

function chineseZodiac(year) {
    switch (year) {
        case 2021:
            return "Ox";
        case 2020:
            return "Rat";
        case 1933:
            return "Rooster"

    }
    // if (year === 2021) {
    //     return "OX"
    // } else if (year === 2020) {
    //     return "Rat"
    // } else {
    //     return "Rooster"
    // }
}


console.log(chineseZodiac(2021)); // "Ox"
console.log(chineseZodiac(2020)); // "Rat"
console.log(chineseZodiac(1933)); // "Rooster"