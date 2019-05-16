function calculator(firstNumber, secondNumber, operator) {

    switch (operator) {
        case '+': return firstNumber + secondNumber; break;
        case '-': return firstNumber - secondNumber; break;
        case '*': return firstNumber * secondNumber; break;
        case '/': return firstNumber / secondNumber; break;
        case '%': return firstNumber % secondNumber; break;
        case '**': return firstNumber ** secondNumber; break;
        default:
            break;
    }
}

console.log(calculator(26, 6, '-'))