// Write a function that takes an array of strings and a pattern(string) and returns the strings that contain the pattern in alphabetical order.If the pattern is an empty string, return all the strings passed in the input array.
//     Examples

function cmsSelector(array, pattern) {
    // loop
    // let alphabetical = [];
    // if (pattern === "") array.sort((a, b) => a.localeCompare(b));
    // pattern = pattern.toLowerCase();
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].toLowerCase().includes(pattern)) {
    //         alphabetical.push(array[i]);
    //     }
    // }
    // return alphabetical.sort((a, b) => a.localeCompare(b));

    // method
    if (pattern === "") return array.sort((a, b) => a.localeCompare(b));
    return array.filter(elm => elm.toLowerCase().includes(pattern)).sort((a, b) => a.localeCompare(b));

}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); //["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); //["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); //["Drupal", "Joomla", "Magento", "WordPress"]