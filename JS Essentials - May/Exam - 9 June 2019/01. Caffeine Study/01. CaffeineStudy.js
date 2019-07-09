function solve(days) {

    let coffeeMl = 0;
    let colaMl = 0;
    let teaMl = 0;
    let energyMl = 0;

    for (let i = 1; i <= days; i++) {

        coffeeMl += 3 * 150;
        colaMl += 2 * 250;
        teaMl += 3 * 350;

        if (i % 5 === 0) {
            energyMl += 3 * 500;
        }

        if (i % 9 === 0) {
            colaMl += 4 * 250;
            energyMl += 2 * 500;
        }
    }

    coffeeMl *=  0.40;
    colaMl *=   0.08;
    teaMl *= 0.20;
    energyMl *= 0.30

    let sumCaffeine = coffeeMl + colaMl+ teaMl + energyMl;

    console.log(`${sumCaffeine} milligrams of caffeine were consumed`)
}

solve(5)