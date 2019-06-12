function solve() {
    let cells = Array.from(document.getElementsByTagName('input'));

    let table = Array.from(document.getElementsByTagName('table'))[0];
    let divElement = document.getElementById('check');
    let pElement = divElement.children[0];

    let quickCheckBtn = Array.from(document.getElementsByTagName('button'))[0];
    quickCheckBtn.addEventListener('click', quickCheck);

    let clearBtn = Array.from(document.getElementsByTagName('button'))[1];
    clearBtn.addEventListener('click', clear);

    function clear(){
        for (let cell of cells) {
            cell.value = '';
            table.style.border = '';
            pElement.textContent = '';
        }
    }
    let isRight = true;

    function quickCheck() {
        isRight = true;

        for (let i = 0; i < 3; i++) {
            if (cells[i * 3].value == cells[i * 3 + 1].value
                || cells[i * 3 + 1].value == cells[i * 3 + 2].value
                || cells[i * 3].value == cells[i * 3 + 2].value
                || cells[i].value == cells[i + 3].value
                || cells[i + 3].value == cells[i + 6].value
                || cells[i].value == cells[i + 6].value) {
                isRight = false;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (cells[i].value == '') {
                isRight = false;
            }
        }
        console.log(isRight);
        returnResult();
    }

    function returnResult() {

        if (isRight) {
            table.style.border = '2px solid green';
            pElement.textContent = 'You solve it! Congratulations!';
            pElement.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            pElement.textContent = 'NOP! You are not done yet...';
            pElement.style.color = 'red';
        }
    }
}