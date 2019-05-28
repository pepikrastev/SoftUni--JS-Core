function solve(matrix) {

    let firstSum = 0, secondSum = 0;

    for(let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix[row].length - row - 1];
    }

    console.log(`${firstSum} ${secondSum}`);
}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)