function solve(arr){

    console.log(`Sum = ` + arr.reduce((a, b) => a + b));
    console.log(`Sum = ` + arr.reduce((a, b) => Math.min(a, b)));
    console.log(`Sum = ` + arr.reduce((a, b) => Math.max(a, b)));
    console.log(`Sum = ` + arr.reduce((a, b) => a * b));
    console.log(`Sum = ` + arr.reduce((a, b) => "" + a + b));

}

solve([5, -3, 20, 7, 0.5]);