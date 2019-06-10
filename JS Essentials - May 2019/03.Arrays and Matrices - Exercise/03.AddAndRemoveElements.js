function solve(arrOfCommands){
  
    let arrOfNumbers = [];
    let number = 1;

    for (let i = 0; i < arrOfCommands.length; i++) {
        let command = arrOfCommands[i];

        if (command === 'add') {
            arrOfNumbers.push(number);
        }else{
            arrOfNumbers.pop();
        }

        number++;
    }

    if (arrOfNumbers.length === 0) {
        console.log('Empty')
    }else{
        console.log(arrOfNumbers.join('\n'))
    }
}

solve(['add', 
'add', 
'add', 
'add']
)