function solve(array) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (maxNumber <= array[i]) {
            maxNumber = array[i];
            console.log(maxNumber)
        }
    }
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)