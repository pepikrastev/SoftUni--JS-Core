function calculator(firstNumber, secondNumber, operator) {

    let result = 0;

    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        case '**': result = firstNumber ** secondNumber; break;
        default:
            break;
    }

    console.log(result)
}

calculator(5, 6, "**")