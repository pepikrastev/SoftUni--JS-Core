function solve() {

   let buttons = document.querySelectorAll(`div button`);

   for (let i = 0; i < buttons.length - 1; i++) {
      buttons[i].addEventListener(`click`, addProduct);
   }
   
   buttons[3].addEventListener(`click`, buy);

   let products = {};

   function addProduct(e) {

      let el = e.target.parentNode.parentNode.children;
      console.log(el);
      let name = el[1].children[0].textContent;
      let price = +el[3].textContent;

      let product = {
         name: name,
         price: price,
         count: 1
      }

      if (!products.hasOwnProperty(product.name)) {
         products[product.name] = product;
      } else {
         products[product.name].count++;
      }

      let textArea = document.querySelector(`textarea`);
      textArea.value += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`
   }

   function buy() {

      let totalPrice = 0;
      let listOfProductNames = []
      for (let p of Object.values(products)) {

         totalPrice += p.price * p.count;
         listOfProductNames.push(p.name);
      }

      let textArea = document.querySelector(`textarea`);
      textArea.value += `You bought ${listOfProductNames.join(`, `)} for ${totalPrice.toFixed(2)}.\n`;

      for (let i = 0; i < buttons.length - 1; i++) {

         buttons[i].removeEventListener(`click`, addProduct);
      }

      buttons[3].removeEventListener(`click`, buy);
   }
}