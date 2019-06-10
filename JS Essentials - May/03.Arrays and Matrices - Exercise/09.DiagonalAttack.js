function solve(arrayOfStrings) {

    let matrixOfNumbers = arrayOfStrings.map((element) => {
        return element.split(" ").map(number => Number(number));
    });

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let row = 0; row < matrixOfNumbers.length; row++) {
        sumFirstDiagonal += matrixOfNumbers[row][row];
        sumSecondDiagonal += matrixOfNumbers[row][matrixOfNumbers.length - 1 - row]
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {

        for (let row = 0; row < matrixOfNumbers.length; row++) {
            for (let col = 0; col < matrixOfNumbers[row].length; col++) {

                // let first = matrixOfNumbers[row][row];
                // let second = matrixOfNumbers[row][matrixOfNumbers.length - 1 - row];

                if (row !== col && (row + col) !== matrixOfNumbers.length - 1) {
                    matrixOfNumbers[row][col] = sumFirstDiagonal
                }


            }
        }
        matrixOfNumbers.forEach(element => {
            console.log(element.join(" "))
        });


    } else {
        matrixOfNumbers.forEach(element => {
            console.log(element.join(" "))
        });
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)