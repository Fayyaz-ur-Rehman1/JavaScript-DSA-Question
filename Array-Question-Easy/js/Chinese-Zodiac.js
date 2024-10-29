// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

function chineseZodiac(year) {
    const zodiacSigns = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];

    // // 2020 mein "Rat" ka saal tha. Hum uss point se calculate kar rahe hain.
    // const startYear = 2020;

    // // Year ke basis pe index calculate karo
    // const index = (year - startYear) % 12;
    // console.log(index);

    // // Negative values ko handle karne ke liye yeh adjustment karte hain
    // return zodiacSigns[(index + 12) % 12];

    const startYear = 2020; // Base year is 2020
    const offset = (year - startYear) % 12; // Calculate the offset

    // Adjust for negative index values
    const index = (offset + 12) % 12;

    // Use a for loop to find the zodiac sign
    let resultStore = "";
    for (let i = 0; i < zodiacSigns.length; i++) {
        if (i === index) {
            resultStore = zodiacSigns[i]; // Store the zodiac sign for the calculated index
            break; // Exit the loop once we find the zodiac sign
        }
    }

    return resultStore; // Return the result
}


console.log(chineseZodiac(2021)); // "Ox"
console.log(chineseZodiac(2020)); // "Rat"
console.log(chineseZodiac(1933)); // "Rooster"