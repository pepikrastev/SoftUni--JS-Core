function solve(firstNumber, secondNumber, thirdNumber) {

    let result;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        result = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        result = secondNumber
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        result = thirdNumber
    }

    console.log(`The largest number is ${result}.`)

    //or..
    //return Math.max(firstNumber, secondNumber, thirdNumber);
}

solve(5, -3, 16)
//console.log(solve(5, -3, 16))