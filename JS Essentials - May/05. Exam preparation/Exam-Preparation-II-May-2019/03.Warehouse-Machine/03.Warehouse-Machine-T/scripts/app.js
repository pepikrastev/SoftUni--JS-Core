function coffeeStorage() {

    let input = JSON.parse(document.querySelector('textarea').value);

    let [report, inspection] = document.getElementsByTagName('p');

    let brands = {};

    for (let tokens of input) {
        let [command, brand, name, date, quantity] = tokens.split(", ");

        if (command == 'IN') {
            if (!brands[brand]) {
                brands[brand] = {};
            }

            if (!brands[brand][name]) {
                brands[brand][name] = { date, quantity: Number(quantity) };
            }

            if (brands[brand][name].date === date) {
                brands[brand][name] = { date, quantity: Number(quantity) };
            }

            if (brands[brand][name].date < date) {
                brands[brand][name] = { date, quantity: Number(quantity) };
            }

        } else if (command === 'OUT') {
            if (brands[brand] &&
                brands[brand][name] &&
                brands[brand][name].date > date &&
                brands[brand][name].quantity >= Number(quantity)) {

                brands[brand][name].quantity -= Number(quantity);
            }
        } else if (command === 'REPORT') {

            Object.entries(brands).forEach(([brand, name]) => {

                let arr = [];

                Object.entries(name).forEach(([coffeeName, info]) => {
                    arr.push(`${coffeeName} - ${info.date} - ${info.quantity}.`)
                });

                report.innerHTML += `${brand}: ${arr.join(' ')}` + '</br>';
            });
        } else if (command === 'INSPECTION') {

                Object.entries(brands)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([brand, name]) => {
                    let arr = [];
                    
                    Object.entries(name)
                    .sort((a,b) => b[1].quantity - a[1].quantity)
                    .forEach(([coffeeName, info]) => {
                        arr.push(`${coffeeName} - ${info.date} - ${info.quantity}.`)
                    });

                    inspection.innerHTML += `${brand}: ${arr.join(' ')}` + '<br/>';
                });
        }
    }
}