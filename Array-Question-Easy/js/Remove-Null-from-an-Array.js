// Create a function to remove all null values from an array.


function removeNull(array) {
    // let notNull = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== null) {
    //         notNull.push(array[i]);
    //     }
    // }
    // return notNull;

    // return array.filter(function (elm) {
    //     return elm !== null;
    // });

    // return array.reduce((result, elm) => {
    //     if (elm !== null) result.push(elm);
    //     return result;
    // }, []);

    // return array.reduce((result, elm) => {
    //     if (elm !== null) result.push(elm);
    //     return result;
    // }, []);

    // return array.flatMap(elm => (elm !== null ? [elm] : []));

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === null) {
            array.splice(i, 1);
        }
    }
    return array;
}
console.log(removeNull(["a", null, "b", null]));   //  ["a", "b"]
console.log(removeNull([null, null, null, null, null]));   //  []
console.log(removeNull([7, 8, null, 9]));   //  [7, 8, 9]