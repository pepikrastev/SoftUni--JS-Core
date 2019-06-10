function solve(array){

    let element = array[array.length - 1];
    let newArray = array.slice(0, array.length - 1)

    console.log(newArray.join(element))
}

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
)