function solve(car) {
    let power;
    let volume;

    if (car.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (car.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    let wheels = [];

    for (let i = 0; i < 4; i++) {
        if (car.wheelsize % 2 === 0) {
            wheels.push(car.wheelsize - 1);
        } else {
            wheels.push(car.wheelsize);
        }
    }

    let newCar = {
        model: car.model,
        engine: {
            power,
            volume,
        },
        carriage: {
            type: car.carriage,
            color: car.color,
        },
        wheels,
    };

    return newCar;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));