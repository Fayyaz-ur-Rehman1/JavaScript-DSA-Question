// Write a function that takes an array of strings and a pattern(string) and returns the strings that contain the pattern in alphabetical order.If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(array, pattern) {
    // loop
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes(pattern.toLowerCase())) {
            result.push(array[i]);
        }
    }
    return result.sort();

    // method
    // let filerOut = array.filter(elm => elm.toLowerCase().includes(pattern.toLowerCase()))
    // return filerOut.sort()

}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); //["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); //["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); //["Drupal", "Joomla", "Magento", "WordPress"]