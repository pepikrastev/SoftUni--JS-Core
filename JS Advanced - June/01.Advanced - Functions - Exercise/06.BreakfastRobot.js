let robot = (
    /* Judge Submission - Start */
    function solve() {
        return (function () {

            const ingredients = {
                protein: 0,
                carbohydrate: 0,
                fat: 0,
                flavour: 0
            };

            const recipes = {
                'apple': { carbohydrate: 1, flavour: 2 },
                'lemonade': { carbohydrate: 10, flavour: 20 },
                'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
                'eggs': { protein: 5, fat: 1, flavour: 1 },
                'turkey': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
            };

            function restock(ingredient, quantity){
                ingredients[ingredient] += Number(quantity);
                return 'Success';
            }

            function prepare(recipe, neededQuantity){
                const neededIngredients = Object.entries(recipes[recipe]);

                for (const [ingredient, quantity] of neededIngredients) {
                    const storedIngrediet = ingredients[ingredient] * neededQuantity;

                    if (quantity > storedIngrediet) {
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }

                for (const [ingredient, quantity] of neededIngredients) {
                    ingredients[ingredient] -= quantity * neededQuantity;
                }

                return 'Success';
            }

            function report(){
                return Object.entries(ingredients)
                .map(kvp => `${kvp[0]}=${kvp[1]}`)
                .join(' ');
            }

            return function(input){
                let tokens = input.split(' ');
                let command = tokens[0];

                if (command === 'prepare') {
                    return prepare(tokens[1], Number(tokens[2]));
                }else if (command === 'restock') {
                    return restock(tokens[1], Number(tokens[2]));
                }else if (command === 'report') {
                    return report();
                }
            }

        })();
    }
    /* Judge Submission - End*/
)(); //IIFE - for local testing

console.log(robot("restock fat 200"));
console.log(robot("report"));
console.log(robot("prepare apple 2"));




