function getInfo() {
    let inputValue = document.querySelector('#stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;

    fetch(url)
    .then((info) => info.json())
    .then((data) => {
        document.querySelector('#stopName').textContent = data.name;
        document.querySelector('#buses').innerHTML = '';

        let buses = Object.entries(data.buses);

        for (const bus of buses) {
            let text = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;

           let liElement = document.createElement('li');
           liElement.textContent = text;

           document.querySelector('#buses').appendChild(liElement);
        }
        
    })
    .catch(error => {
        document.querySelector('#stopName').textContent = 'Error';
    });

    document.querySelector('#stopId').value = '';
}