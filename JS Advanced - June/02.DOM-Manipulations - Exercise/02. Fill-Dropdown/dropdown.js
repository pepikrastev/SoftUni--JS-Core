function addItem() {
   let firstInput = document.querySelector('#newItemText');
   let secondInput = document.querySelector('#newItemValue');
   let menuElement = document.querySelector('#menu')

   let optionElement = document.createElement('option');
   optionElement.textContent = firstInput.value;
   optionElement.value = secondInput.value;

   menuElement.appendChild(optionElement)
   firstInput.value = '';
   secondInput.value = '';
}