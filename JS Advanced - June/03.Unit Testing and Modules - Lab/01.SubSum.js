function solve(array, startIndex, endIndex){
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (!array.every(n => +n)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex =  0;
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    if (array.length === 0) {
        return 0;
    }

    let sum = array
    .slice(startIndex, endIndex + 1)
    .reduce((a, b) => a + b);

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))