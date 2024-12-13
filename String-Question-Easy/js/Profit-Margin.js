// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

function profitMargin(costPrice, salesPrice) {
    // let calculate = salesPrice - costPrice;
    // return ((calculate / salesPrice) * 100).toFixed(1) + "%";

    let profitMargin = (((salesPrice - costPrice) / salesPrice) * 100).toFixed(1) + "%";
    return profitMargin;
}

console.log(profitMargin(50, 50)); // "0.0%"
console.log(profitMargin(28, 39)); // "28.2%"
console.log(profitMargin(33, 84)); // "60.7%"