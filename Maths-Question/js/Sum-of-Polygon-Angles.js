// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Formula =>  (n - 2) x 180

function sumPolygon(n) {
    return (n - 2) * 180
}

console.log(sumPolygon(3)); // 180
console.log(sumPolygon(4)); // 360
console.log(sumPolygon(6)); // 720