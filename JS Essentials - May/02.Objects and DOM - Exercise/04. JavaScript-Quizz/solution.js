function solve() {

  let questions = document.getElementsByTagName('h2');
  let rightAnswers = 0;
  let wrongAnswers = 0;

  let firstButtons = document.getElementsByClassName('quiz-answer low-value');
  let firstButton = firstButtons[0];
  firstButton.addEventListener('click', () => {
    rightAnswers++;
    second();
  });

  let secondButtons = document.getElementsByClassName('quiz-answer high-value');
  let secondButton = secondButtons[0];
  secondButton.addEventListener('click', () => {
    wrongAnswers++;
    second();
  });

  function second() {

    let firstSection = document.getElementsByTagName('section')[0];
    let secondSection = document.getElementsByTagName('section')[1];

    firstSection.style.display = 'none';
    secondSection.style.display = 'block';

    let firstButton1 = firstButtons[1];
    firstButton1.addEventListener('click', () => {
      wrongAnswers++;
      third()
    });

    let secondButton1 = secondButtons[1];
    secondButton1.addEventListener('click', () => {
      rightAnswers++;
      third()
    });

    function third() {

      let thirdSection = document.getElementsByTagName('section')[2];

      secondSection.style.display = 'none';
      thirdSection.style.display = 'block';
      let firstButton2 = firstButtons[2];
      firstButton2.addEventListener('click', () => {
        rightAnswers++;
        final();
      });

      let secondButton2 = secondButtons[2];
      secondButton2.addEventListener('click', () => {
        wrongAnswers++;
        final();
      });

      function final() {

        thirdSection.style.display = 'none';

        let perent = document.getElementById('results');
        let child = document.getElementsByClassName('results-inner')[0];

        let h1 = child.children[0];
        let div = document.createElement('div');

        perent.appendChild(div);
        div.appendChild(child);

        if (rightAnswers === 3) {
          h1.textContent = 'You are recognized as top JavaScript fan!';
        }else{
          h1.textContent = `You have ${rightAnswers} right answers`;
        }
        perent.style.display = 'block';
      }
    }
  }
}
