// Create a function that applies a discount d to every number in the array.

function getDiscounts(array, discount) {
    // let result = [];
    // let discountValue = parseFloat(discount) / 100;
    // for (let i = 0; i < array.length; i++) {
    //     let d = array[i] * discountValue;
    //     result.push(d);
    // }
    // return result;

    // method
    // const discountValue = parseFloat(discount) / 100;
    // return array.map(num => num * discountValue);

    // array.map(num => num * (parseFloat(discount) / 100));

    const discountValue = parseFloat(discount) / 100;
    return array.reduce((result, num) => {
        result.push(num * discountValue);
        return result;
    }, []);

}

console.log(getDiscounts([2, 4, 6, 11], "50%")); // [1, 2, 3, 5.5]
console.log(getDiscounts([10, 20, 40, 80], "75%")); // [7.5, 15, 30, 60]
console.log(getDiscounts([100], "45%")); // [45]