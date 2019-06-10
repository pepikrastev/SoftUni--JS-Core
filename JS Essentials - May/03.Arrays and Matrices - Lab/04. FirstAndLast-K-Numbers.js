function solve(arr) {

    let countOfNumbers = arr.shift();

    let newArr = arr.slice(0, countOfNumbers);
    console.log(newArr)

    newArr = arr.slice(arr.length - countOfNumbers);
    console.log(newArr)


    //   for (let i = arr.length; i < countOfNumbers; i--) {
    //      newArr[i] = arr[i]
    //}
    //    console.log(newArr)
}

solve([3, 6, 7, 8, 9])