function solve(inputArray) {

    let createCarFactory = function () {
        let cars = {};

        return {
            create: (name) => cars[name] = {},
            inherit: (child, parent) => Object.setPrototypeOf(cars[child], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let carInfo = [];

                for (const key in cars[name]) {

                    carInfo.push(`${key}:${cars[name][key]}`);
                }
                console.log(carInfo.join(', '));
            }
        };
    };

    let carFactory = createCarFactory();

    for (const element of inputArray) {
        const [command, ...args] = element.split(' ');
        const name = args[0];

        if(command === 'create'){
            carFactory.create(name);
            if (args[1] === 'inherit') {
                const parentName = args[2];
                carFactory.inherit(name, parentName);
            }
        }else if (command === 'set') {
            const key = args[1];
            const value = args[2];
            carFactory.set(name, key, value);
        }else if (command === 'print'){
            carFactory.print(name);
        }
    }   
};

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)