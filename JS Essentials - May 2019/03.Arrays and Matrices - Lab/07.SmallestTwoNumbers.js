function solve(arr){

    arr.sort(function(a, b) {
        return a - b
    });
    
   arr = arr.slice(0, 2)
    console.log(arr)
}

solve([3, 0, 10, 4, 7, 3])