function calculateStrings(firstString, secondString) {

    let firstNumber = Number(firstString);
    let secondNumber = Number(secondString);

    let result = 0;

    for (let index = firstNumber; index <= secondNumber; index++) {

        result += index
    }

    console.log(result)
}

function iteration(firstNumber, secondNumber) {

    if (firstNumber == secondNumber) {
        return secondNumber;
    } else {
        return firstNumber + iteration(firstNumber + 1, secondNumber)
    }
}

console.log(iteration(-8, 20))
calculateStrings('-8', '20')