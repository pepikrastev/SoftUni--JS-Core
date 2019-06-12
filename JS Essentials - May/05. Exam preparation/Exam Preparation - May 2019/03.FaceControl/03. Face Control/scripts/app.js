function getData() {

	let input = JSON.parse(document.querySelector("textarea").value);
	let pplIn = document.querySelector("#peopleIn p");
	let blacklistP = document.querySelector("#blacklist p");
	let pplOut = document.querySelector("#peopleOut p");
	let lastElement = input.pop();

	let peopleIn = [];
	let peopleOut = [];
	let blacklist = [];

	for (let person of input) {

		let action = person.action;
		let currentName = {
			firstName: person.firstName,
			lastName: person.lastName
		};

		if (action === "peopleIn") {
			if (!blacklist.find(p =>
				p.firstName === currentName.firstName
				&& p.lastName === currentName.lastName)) {

				peopleIn.push(currentName);
			}
		} else if (action === "peopleOut") {
			if (peopleIn.find(p => p.firstName === currentName.firstName
				&& p.lastName === currentName.lastName)) {

				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName
					&& p.lastName === currentName.lastName);

				// let index = peopleIn.indexOf(currentName);
				peopleIn.splice(index, 1);
				peopleOut.push(currentName);
			}
		} else if (action === "blacklist") {
			if (peopleIn.find(p => p.firstName === currentName.firstName
				&& p.lastName === currentName.lastName)) {

				let index = peopleIn.findIndex(p => p.firstName === currentName.firstName
					&& p.lastName === currentName.lastName);
				peopleIn.splice(index, 1);
				peopleOut.push(currentName);

			}
			blacklist.push(currentName)
		}
	}

	let output = {};

	output["peopleIn"] = peopleIn;
	output["peopleOut"] = peopleOut;
	output["blacklist"] = blacklist;

	if (lastElement.action !== "" && lastElement.criteria !== "") {
		let criteria = lastElement.criteria;
		output[lastElement.action] = output[lastElement.action]
		.sort((a,b) => a[criteria].localeCompare(b[criteria]))
	}

	pplIn.textContent = output.peopleIn
	.map(x => JSON.stringify(x))
	.join(" ");

	blacklistP.textContent = output.blacklist
	.map(x => JSON.stringify(x))
	.join(" ");

	pplOut.textContent = output.peopleOut
	.map(x => JSON.stringify(x))
	.join(" ");
}