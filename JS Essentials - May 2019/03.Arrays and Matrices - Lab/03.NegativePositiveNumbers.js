function solve(arr){

    let newArr = [];

    for (let value of arr) {
        if (value >= 0) {
            newArr.push(value)
        }else {
            newArr.unshift(value)
        }
    }

    console.log(newArr)
}

solve([3, -2, 0, -1])