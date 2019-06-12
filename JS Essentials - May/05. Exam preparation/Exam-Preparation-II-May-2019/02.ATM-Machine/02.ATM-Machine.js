function solve(matrix) {

    let banknotesInATM = [];

    for (let row = 0; row < matrix.length; row++) {

        if (matrix[row].length > 2) {

            banknotesInATM.push(...matrix[row]);
            console.log(`Service Report: ${getSum(matrix[row])}$ inserted. Current balance: ${getSum(banknotesInATM)}$.`);

        } else if (matrix[row].length === 1) {

            let banknote = matrix[row][0];
            let count = banknotesInATM.filter(b => b === banknote).length;
            console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);

        } else if (matrix[row].length === 2) {

            let currentBalance = matrix[row][0];
            let withdrow = matrix[row][1];

            if (currentBalance < withdrow) {
                console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`)
            } else if (getSum(banknotesInATM) < withdrow) {
                console.log(`ATM machine is out of order!`)
            } else {

                banknotesInATM = banknotesInATM.sort((a, b) => b - a)
                let sum = 0;

                for (let i = 0; i < banknotesInATM.length; i++) {
                    if (sum === withdrow) {
                        break;
                    }

                    if (sum + banknotesInATM[i] <= withdrow) {
                        sum += +banknotesInATM.splice(i, 1);
                        i--;
                    }
                }
                console.log(`You get ${sum}$. Account balance: ${currentBalance - sum}$. Thank you!`)
            }
        }
    }

    function getSum(banknote) {
        return banknote.reduce((a, b) => a + b, 0)
    }
}

solve([[20, 5, 100, 20, 1],
[457, 25],
[1],
[10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
[20, 85],
[5000, 4500],
])