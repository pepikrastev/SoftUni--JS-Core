function solve() {
    let firstElement, secondElement, resultElement;

    function init(firstElementCell, secondElementCell, resultElementCell){
        firstElement = $(firstElementCell);
        secondElement = $(secondElementCell);
        resultElement = $(resultElementCell);
    }
   

    function add(){
        action((a, b) => a + b);
    }

    function subtract(){
        action((a,b) => a - b);
    }

    function action(operation){
        let firstValue = Number(firstElement.val());
        let secondValue = Number(secondElement.val());
        resultElement.val(operation(firstValue, secondValue));
    }

    let model = {init, add, subtract};
    return model;   
}

