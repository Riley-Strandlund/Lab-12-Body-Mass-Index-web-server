
function calculation(height, weight) {
    const bmi = (height / (weight * weight)).toFixed(2)
    return bmi
}

module.exports = calculation