function solve() {
   Array.from(document.getElementsByTagName('img')).forEach((img) => img.addEventListener('click', clickEvent))

   function clickEvent(e) {
      let card = e.target;

      card.src = './images/whiteCard.jpg'
      card.removeEventListener('click', clickEvent)
      let parent = card.parentNode;

      let spans = document.getElementById('result').children;

      let leftSpan = spans[0];
      let rightSpan = spans[2];

      if (parent.id === 'player1Div') {
         leftSpan.textContent = card.name;
      } else if (parent.id === 'player2Div') {
         rightSpan.textContent = card.name;
      }

      if (leftSpan.textContent && rightSpan.textContent) {
         let winner;
         let loser;

         if (+leftSpan.textContent > +rightSpan.textContent) {
            winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
            loser = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`)
            // document.getElementsByName(`${leftSpan.textContent}`);
         } else {
            winner = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
            loser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`)
         }

         winner.style.border = '2px solid green'
         loser.style.border = '2px solid red'

         document.getElementById('history').textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

         leftSpan.textContent = ''
         rightSpan.textContent = ''
      }
   }
}