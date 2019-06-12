function solve() {

  let input = document.getElementById("text").value;

  let currentCase = document.getElementById("naming-convention").value;

  function pascalOrCamelCase(input, currentCase) {

    let words = input.toLowerCase().split(' ').filter(a => a !== '');

    let output = "";

    if (currentCase === "Pascal Case" || currentCase === "Camel Case") {
      for (const word of words) {
        output += word[0].toUpperCase() + word.substr(1, word.length).toLowerCase();
      }
    } else {

      output = "Error!";
    }

    if (currentCase === "Camel Case") {
      output = output[0].toLowerCase() + output.substr(1);
    }

    document.getElementById("result").innerHTML = output;
  }

  pascalOrCamelCase(input, currentCase)
}