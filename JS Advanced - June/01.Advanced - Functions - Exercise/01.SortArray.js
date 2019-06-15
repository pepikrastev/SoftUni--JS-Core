function solve(array, text) {
    switch (text) {
        case 'desc':
            array = array.sort((a, b) => b - a);
            break;
        case 'asc':
            array = array.sort((a, b) => a - b);
            break;
    }

    return array;
}

console.log(solve([3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6], 'asc'))