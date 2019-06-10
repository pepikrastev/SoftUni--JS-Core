function solve() {

  let input = document.getElementById('input').textContent;
  let output = document.getElementById('output');
  let sentences = input.split('.')

  while (sentences.length > 0) {

    let paragraph = [];

    for (let i = 0; i < 3; i++) {
      paragraph.push(sentences.shift());

      if (sentences.length === 0) {
        break;
      }
    }
    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = paragraph.join('. ');
    output.appendChild(paragraphElement);
  }
}