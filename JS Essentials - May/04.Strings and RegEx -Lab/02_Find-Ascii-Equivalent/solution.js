function solve() {

  const text = document.querySelector('#text').value;
  let result = document.getElementById('result');

  const parts = text.split(' ');
  let output = '';

  for (let element of parts) {

    if (Number(element)) {
      output += (String.fromCharCode(element));
    } else {
      let charToNumber = [];

      for (let i = 0; i < element.length; i++) {
        charToNumber.push(element[i].charCodeAt(0));
      }
      
      let p = document.createElement('p');
      p.innerHTML = charToNumber.join(' ');
      result.appendChild(p);
    }
  }
  
  let p = document.createElement('p');
  p.innerHTML = output;
  result.appendChild(p);
}