function attachEvents() {
    document.getElementById('phonebook').innerHTML = '';

    let loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', loadContacts);

    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', createingContact);

    const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    function loadContacts() {
        document.getElementById('phonebook').innerHTML = '';

        fetch(url)
            .then(request => request.json())
            .then(data => {
                let contacts = Object.values(data);

                for (const contact of contacts) {
                    let name = contact.person;
                    let number = contact.phone;

                    let delBtn = document.createElement('button');
                    delBtn.textContent = 'Delete';

                    let liElement = document.createElement('li');
                    liElement.textContent = `${name}: ${number} `;
                    liElement.appendChild(delBtn);

                    document.getElementById('phonebook').appendChild(liElement);

                    delBtn.addEventListener('click', (e) => {
                        let currentContact = e.target.parentNode;
                        let contactInfo = currentContact.textContent
                            .split(' ').filter(x => x !== '');

                        let name = contactInfo[0];
                        let number = contactInfo[1];
                        let searchedId = '';

                        let contactsIds = Object.keys(data);

                        for (const id of contactsIds) {
                            if (data[id].person === name
                                && data[id].phone === number) {
                                searchedId = id;
                                break;
                            }
                        }

                        currentContact.remove();

                        const idUrl = 'https://phonebook-nakov.firebaseio.com/phonebook'
                        + '/' + searchedId + '.json';

                        fetch(idUrl, {
                            method: 'delete',
                            body: JSON.stringify(searchedId)
                        })
                            .then(result => result.json());
                    });
                }
            });
    }

    function createingContact() {
        document.getElementById('phonebook').innerHTML = '';

        let name = document.getElementById('person');
        let number = document.getElementById('phone');

        if (name.value && number.value) {
            let currentPerson = {
                person: name.value,
                phone: number.value
            };

            fetch(url, {
                method: 'post',
                body: JSON.stringify(currentPerson)
            })
                .then(res => res.json());
        }

        loadContacts();

        name.value = '';
        number.value = '';
    }
}



attachEvents();