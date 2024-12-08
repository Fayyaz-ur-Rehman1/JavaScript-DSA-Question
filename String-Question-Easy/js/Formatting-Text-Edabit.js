// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough

function mdFormat(text, style) {
    // switch (style) {
    //     case "b":
    //         return `**${text}**`
    //     case "i":
    //         return `_${text}_`
    //     case "c":
    //         return `\`${text}\``
    //     case "s":
    //         return `${text}`
    //     default:
    //         return text
    // }

    const styles = {
        b: `**${text}**`,
        i: `_${text}_`,
        c: `\`${text}\``,
        s: `~~${text}~~`
    };
    return styles[style] || text;
}

console.log(mdFormat("Bold", "b"));  // "**Bold**"
console.log(mdFormat("leaning text", "i"));  // "_leaning text_"
console.log(mdFormat("Edabit", "c"));  // "`Edabit`"
console.log(mdFormat("That's a strike!", "s"));  // "~~That's a strike!~~"