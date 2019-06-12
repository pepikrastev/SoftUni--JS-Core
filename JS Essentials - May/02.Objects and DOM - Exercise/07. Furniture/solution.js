function solve() {

  let furnitureList;

  document.getElementsByTagName('button')[0].addEventListener('click', function () {

    furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let table = document.getElementsByClassName('table')[0];

    for (let furniture of furnitureList) {

      let row = table.insertRow();

      let cell = row.insertCell();

      let img = document.createElement('img');
      img.setAttribute('src', furniture.img)

      cell.appendChild(img);

      cell = row.insertCell();

      let name = document.createElement('p');
      name.innerHTML = furniture.name;
      cell.appendChild(name)

      cell = row.insertCell();

      let price = document.createElement('p');
      price.innerHTML = furniture.price;
      cell.appendChild(price)

      cell = row.insertCell();

      let decFactor = document.createElement('p');
      decFactor.innerHTML = furniture.decFactor;
      cell.appendChild(decFactor)

      cell = row.insertCell();

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', "checkbox");
      cell.appendChild(checkbox)
    }
  });

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', buy);

  function buy() {
    let furnitureName = [];
    let totalPrice = 0;
    let decFactor = 0;
    let counter = 0;
    let furniture = Array.from(document.getElementsByTagName('tr'));

    for (let i = 1; i < furniture.length; i++) {
      if (furniture[i].children[4].children[0].checked == true) {

        furnitureName.push(furniture[i].children[1].textContent);
        totalPrice += Number(furniture[i].children[2].textContent);
        decFactor += Number(furniture[i].children[3].textContent);
        counter += 1;
      }
    }

    let output = document.getElementsByTagName('textarea')[1];
    output.value = `Bought furniture: ${furnitureName.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(decFactor / counter)}`;   
  }
}