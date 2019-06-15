function solve(){
    let typeCounter = {};

    for (let argument of arguments) {
        let type = typeof argument;

        if (type === 'object') {
            console.log(`${type}: `);
        }else {
            console.log(`${type}: ${argument}`);
        }
           
        if (typeCounter[type]) {
            typeCounter[type]++;
        }else{
            typeCounter[type] = 1;
        }
    }

   typeCounter = Object.entries(typeCounter)
   .sort((a,b) => b[1] - a[1])
   .forEach((a=> console.log(`${a[0]} = ${a[1]}`)));   
}

solve('cat', 42, function () { console.log('Hello world!'); })