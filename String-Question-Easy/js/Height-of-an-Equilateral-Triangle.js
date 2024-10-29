// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

function height(sideInCm) {
    const sideInMm = sideInCm * 10;
    const heightInMn = (Math.sqrt(3) / 2) * sideInMm
    return heightInMn.toFixed(1) + " mm"
}

console.log(height(2)); // 17.3 mm
console.log(height(5)); // 43.3 mm
console.log(height(6.2)); // 53.7 mm