function roadRadar(input) {

    let speed = input[0];
    let area = input[1];

    let speeding = 0;

    switch (area) {
        case "motorway":
            speeding = 130 - speed;
            break;
        case "interstate":
            speeding = 90 - speed;
            break;
        case "city":
            speeding = 50 - speed;
            break;
        case "residential":
            speeding = 20 - speed;
            break;
    }

    if (speeding <= -1 && speeding >= -20) {
        console.log("speeding")
    } else if (speeding < -20 && speeding >= -40) {
        console.log("excessive speeding")
    } else if (speeding < -40) {
        console.log("reckless driving")
    }
}

roadRadar([10, 'residential'])