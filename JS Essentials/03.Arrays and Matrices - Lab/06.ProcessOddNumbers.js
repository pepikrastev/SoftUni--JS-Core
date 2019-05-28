function solve(arr){

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArray.push(arr[i])
        }        
    }

    newArray = newArray.map(n => n * 2).reverse();

    console.log(newArray.join(" "))
}

solve([3, 0, 10, 4, 7, 3])