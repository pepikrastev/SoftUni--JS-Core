function solve(input) {
    let command = (function processor() {

        let arr = [];

        return {

            add: (elem) => arr.push(elem),

            remove: (elem) => arr = arr.filter(item => item !== elem),

            print: () => console.log(arr.join(","))
        }
    })();

    input.forEach(element => {

        let tokens = element.split(/\s+/g).filter(i => i !== "");

        command[tokens[0]](tokens.length > 1 ? tokens[1] : undefined);

    });
}

console.log(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']))