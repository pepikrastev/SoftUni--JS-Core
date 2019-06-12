function solve(inputArray, cutSize) {

    let firstPart = inputArray.slice(0, inputArray.length / 2);
    let secondPart = inputArray.slice(inputArray.length / 2, inputArray.length);
    
    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstPart.length > 0 && secondPart.length > 0) {
        
        firstGiantLife += firstPart.splice(0, cutSize).reduce((a, cv) => a * cv);
        secondGiantLife += secondPart.splice(0, cutSize).reduce((a, cv) => a * cv);
    }

    let damagePerHit = Math.min(...inputArray)
    let deadLine = Math.max(...inputArray);   
    let rounds = 1;

    if (damagePerHit !== 0) {
        while (firstGiantLife > deadLine && secondGiantLife > deadLine) {
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rounds++;
        }
    }

    if (firstGiantLife === secondGiantLife) {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`)
    } else if (firstGiantLife > secondGiantLife){
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`)
    }else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`)
    }    
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2)