function solve(input) {
    let totalMoney = 0;

    for (let tokens of input) {

        let [coins, drink, type, milk, sugar] = tokens.split(", ");

        let price = 0.80;
        if (tokens.includes('decaf')) {
            price += 0.10;
        }
        if (tokens.includes('milk')) {
            // price += price * 0.1;
            //price = price.toFixed(1);
            price += 0.10;
        }
        if (Number(tokens[tokens.length -1]) > 0) {
            price += 0.10
        }

        let change = Math.abs(price - Number(coins));

        if (+coins >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
            totalMoney += price;

        } else {
            console.log(`Not enough money for ${drink}. Need ${change.toFixed(2)}$ more.`)
        }

    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`)
}

solve(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
)