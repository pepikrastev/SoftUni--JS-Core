function solve() {

    let menu = document.getElementById('selectMenuTo');


    let binary = document.createElement('option');
    binary.text = 'Binary';
    binary.value = 'binary';
    menu.add(binary);

    let hexadecimal = document.createElement('option');
    hexadecimal.text = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    menu.add(hexadecimal)

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', () => {
        let decimalNumber = Number(document.getElementById('input').value);
        let output = document.getElementById('result');
        let typeConvert = menu.value;
        let result = 0;

        if (typeConvert === 'binary') {
            result = decimalNumber.toString(2);
        } else if (typeConvert === 'hexadecimal') {
            result = decimalNumber.toString(16).toUpperCase();
        }

        output.value = result;
    });
}