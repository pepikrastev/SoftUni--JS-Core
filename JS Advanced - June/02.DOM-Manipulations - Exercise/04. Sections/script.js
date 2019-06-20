function create(words) {

   let mainDiv = document.querySelector('#content');

   for (let i = 0; i < words.length; i++) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = words[i];
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      divElement.addEventListener('click', () => {
         pElement.style.display = 'inline-block';
      });

      // divElement.addEventListener('dblclick', () => {
      //  pElement.style.display = 'none';
      // });
      mainDiv.appendChild(divElement);
   }
}