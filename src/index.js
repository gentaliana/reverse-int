module.exports = function reverse(n) {
    const num = String(n);
    if (n < 0) {
        const positiveNum = Math.abs(num);
        const intNumToString = String(positiveNum);
        const result = intNumToString.split("").reverse().join("");
        return result;
    }
    return num.split("").reverse().join("");
};
