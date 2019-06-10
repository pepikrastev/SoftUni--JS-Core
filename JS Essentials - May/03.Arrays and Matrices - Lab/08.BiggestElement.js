function solve(matrix) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            let currentNumber = matrix[row][col];
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
    }

    console.log(maxNumber)
}

solve([[20, 50, 10], [8, 33, 145]])