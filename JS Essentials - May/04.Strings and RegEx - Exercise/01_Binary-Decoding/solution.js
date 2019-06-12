function solve() {

	let input = document.getElementById("input").value;
	let result = document.getElementById("resultOutput");
	let sum = getSum(input);


	function getSum(input) {
		let sum = 0;
		let result = input;

		while (result.length > 1) {
			for (let char of result) {
				sum += Number(char);
			}

			result = sum.toString();
			sum = 0;
		}

		return Number(result);
	}

	let slicedText = input.slice(sum, input.length - sum);

	function fromBinaryToChar(binary){

		let decimal = parseInt(binary, 2);
		let char = String.fromCharCode(decimal);

		return char;
	}

	let output = slicedText
	.split(/([\d]{8})/g)
	.filter(el => el !== "")
	.map(el => fromBinaryToChar(el))
	.filter(el => /[a-zA-Z ]+/g.test(el))
	.join("");
	
	//result.innerHTML = output;
	result.textContent = output;
}