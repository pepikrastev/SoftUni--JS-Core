function solve(capacity, arrayOfPassengers) {

    let trainArray = [];
    let peopleWaiting = 0;

    for (let i = 0; i < arrayOfPassengers.length; i++) {

        let currentPassengers = arrayOfPassengers[i]

        if (capacity >= currentPassengers && capacity >= currentPassengers + peopleWaiting) {

            trainArray[i] = currentPassengers + peopleWaiting;
            peopleWaiting = 0;

        } else {

            peopleWaiting += currentPassengers;
            peopleWaiting -= capacity;
            trainArray[i] = capacity;
        }

    }

    if (peopleWaiting > 0) {

        console.log(trainArray)
        console.log(`Could not fit ${peopleWaiting} passengers`);

    } else if (peopleWaiting === 0) {

        console.log(trainArray)
        console.log(`All passengers aboard`);

    }
}

solve(6, [5, 15, 2])
