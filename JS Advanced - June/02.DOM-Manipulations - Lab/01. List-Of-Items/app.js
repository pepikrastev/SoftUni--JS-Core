function addItem() {
        
    let currentInput = document.querySelector('#newItemText');
    let parentUl = document.querySelector('#items');

    let liElement = document.createElement('li');
    liElement.textContent = currentInput.value;

    parentUl.appendChild(liElement);
   currentInput.value = '';
}