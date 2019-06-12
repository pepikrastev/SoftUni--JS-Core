function solve() {

   let button = document.querySelector("#searchBtn");
   button.addEventListener("click", () => {

      let input = document.querySelector("#searchField").value.toLowerCase();
      let table = document.getElementsByTagName("tbody")[0].children;

      for (let i = 0; i < table.length; i++) {
         let row = table[i];
         row.classList.remove("select");
      }

      for (let i = 0; i < table.length; i++) {
         let row = table[i];
         let cells = row.children;
         for (let j = 0; j < cells.length; j++) {
            let cell = cells[j]
            let cellText = cell.textContent.toLocaleLowerCase();

            if (cellText.includes(input) ) {
               row.classList.add("select")
            }
         }
      }
   });
}