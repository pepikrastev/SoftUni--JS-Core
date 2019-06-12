function solve() {

   let button = document.getElementsByTagName("button")[0];
   button.addEventListener("click", addingNames);
    
   function addingNames(){
       let input = document.getElementsByTagName("input")[0].value.toLocaleLowerCase();
       let name = input[0].toLocaleUpperCase() + input.slice(1);
       let charCode = name.charCodeAt(0);

       let liRow = document.getElementsByTagName("li")[charCode - 65];
       let names = liRow.textContent.split(", ").filter(n => n);
       names.push(name);
       liRow.textContent = names.join(", ");

       document.getElementsByTagName("input")[0].value = "";
   }
}