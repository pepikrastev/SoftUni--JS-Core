function solve() {
    let buttons = document.getElementsByClassName('keys')[0].children;
    let expressionOutput = document.querySelector('#expressionOutput');
   
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', () => {
            switch (button.textContent) {
                case '+': expressionOutput.textContent += ` ${button.textContent} `; break;
                case '-': expressionOutput.textContent += ` ${button.textContent} `; break;
                case 'x': expressionOutput.textContent += ` ${button.textContent} `; break;
                case '/': expressionOutput.textContent += ` ${button.textContent} `; break;
                case '=':
                    let text = expressionOutput.textContent.split(' ');
                    let result = 'NaN';
                    let leftNumber = Number(text[0]);
                    let operator = text[1];
                    let rightNumber = Number(text[2]);
                    if (rightNumber != ''){
                        switch (operator) {
                            case '+': result = leftNumber + rightNumber; break;
                            case '-': result = leftNumber - rightNumber; break;
                            case 'x': result = leftNumber * rightNumber; break;
                            case '/': result = leftNumber / rightNumber; break;
                        }
                    }

                    document.querySelector('#resultOutput').textContent = result;
                    break;
                default:
                    expressionOutput.textContent += button.textContent;
                    break;
            }
        });
        
    }
    let clearButton = document.getElementsByClassName('clear')[0];
    clearButton.addEventListener('click', () => {
        expressionOutput.textContent = '';
        document.querySelector('#resultOutput').textContent = '';
    });
}