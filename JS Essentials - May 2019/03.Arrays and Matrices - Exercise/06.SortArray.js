function solve(arr) {

    arr/*.map(x => x.toLowerCase())*/.sort((a,b) => {
        return a.length - b.length || a.localeCompare/* > */(b);
    }).forEach(x => console.log(x)) 

}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)