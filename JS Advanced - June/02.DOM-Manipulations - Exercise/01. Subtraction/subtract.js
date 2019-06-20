function subtract() {
    
    let firstNumber = document.querySelector('#firstNumber');
    let secondNumber = document.querySelector('#secondNumber');
    let outputResult = document.querySelector('#result');

   let result = firstNumber.value - secondNumber.value;
   outputResult.textContent = result;
}