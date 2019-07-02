function solve(object) {
    if (object.dizziness) {
        let amountToAdd = object.weight * 0.1 * object.experience;
        object.levelOfHydrated += amountToAdd;
        object.dizziness = false;
    }

    return object;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));