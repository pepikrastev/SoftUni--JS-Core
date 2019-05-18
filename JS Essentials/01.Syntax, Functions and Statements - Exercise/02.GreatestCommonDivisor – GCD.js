function gcd(firstNumber, secondNumber){

    let greatestDivisor = 0;

    for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
        
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            greatestDivisor = i;
        }
    }

    console.log(greatestDivisor)
}

gcd(15, 5)

//other solution
function solve(firstNumber, secondNumber){

    let result = secondNumber;

    while (true) {
        if (firstNumber % secondNumber == 0 && result % secondNumber == 0) {
            result = secondNumber;
            break;
        }
        secondNumber--;
    }
    console.log(result)
}

solve(15, 5)