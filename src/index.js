module.exports = function reverse(n) {
    if (n < 0) {
        return Number(
            String(-1 * n)
                .split("")
                .reverse()
                .join("")
        );
    } else {
        return Number(String(n).split("").reverse().join(""));
    }
};
