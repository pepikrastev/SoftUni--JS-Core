function spaceshipCrafting() {

    let lossesPercent = 1 - Number(document.getElementById('lossesPercent').value) / 400;
    //with toFixed(0);
    let titanium = (+document.getElementById('titaniumCoreFound').value * lossesPercent / 25).toFixed(0);
    let aluminium = (+document.getElementById('aluminiumCoreFound').value * lossesPercent / 50).toFixed(0);
    //with Math.round;
    let magnesium = Math.round(+document.getElementById('magnesiumCoreFound').value * (lossesPercent) / 75);
    //step by step with toFixed(0);
    let carbon = +document.getElementById('carbonCoreFound').value;
    carbon *= lossesPercent;
    carbon = (carbon / 100).toFixed(0);

    const spaceShips = [
        ['THE-UNDEFINED-SHIP', 0],
        ['NULL-MASTER', 0],
        ['JSON-CREW', 0],
        ['FALSE-FLEET', 0]
    ];

    while (true) {
        let isBuild = false;
        if (titanium >= 7 && aluminium >= 9 && magnesium >= 7 && carbon >= 7) {
            titanium -= 7;
            aluminium -= 9;
            magnesium -= 7;
            carbon -= 7;
            spaceShips[0][1]++;
            isBuild = true;
        }

        if (titanium >= 5 && aluminium >= 7 && magnesium >= 7 && carbon >= 5) {
            titanium -= 5;
            aluminium -= 7;
            magnesium -= 7;
            carbon -= 5;
            spaceShips[1][1]++;
            isBuild = true;
        }

        if (titanium >= 3 && aluminium >= 5 && magnesium >= 5 && carbon >= 2) {
            titanium -= 3;
            aluminium -= 5;
            magnesium -= 5;
            carbon -= 2;
            spaceShips[2][1]++;
            isBuild = true;
        }

        if (titanium >= 2 && aluminium >= 2 && magnesium >= 3 && carbon >= 1) {
            titanium -= 2;
            aluminium -= 2;
            magnesium -= 3;
            carbon -= 1;
            spaceShips[3][1]++;
            isBuild = true;
        }
        if (!isBuild) {
            break;
        }
    }

    let bildShips = spaceShips.filter(s => s[1] > 0);
    let resultShips = [];
    for (const ship of bildShips) {
        resultShips.push(`${ship[1]} ${ship[0]}`)
    }

    let outputs = document.getElementsByTagName('p');
    let outputBars = outputs[0];
    outputBars.textContent = `${titanium} titanium bars, ${aluminium} aluminum bars, ${magnesium} magnesium bars, ${carbon} carbon bars`;

    let outputShips = outputs[1];
    outputShips.textContent = resultShips.join(', ')
}