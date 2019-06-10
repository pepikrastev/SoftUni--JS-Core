function solve() {

  let elements = document.getElementsByClassName('link-1');

  for (let i = 0; i < elements.length; i++) {

    let element = elements[i];

    element.addEventListener('click', () => {
      let elementText = element.querySelector('p');
      let elementTextContent = elementText.textContent;
      let elementTextArr = elementTextContent.split(' ');
      let clicks = Number(elementTextArr[1]) + 1;
      elementTextArr[1] = clicks;
      elementText.textContent = elementTextArr.join(' ');
    });
  }
}