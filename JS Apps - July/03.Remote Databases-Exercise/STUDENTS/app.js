window.addEventListener('load', loadData);

const username = 'guest';
const password = 'guest';
const appKey = 'kid_SJX1ULMMH';
const appSecret = 'd3fc8606986c44fea5ec7c0f3d8c5d45';
const headers = {
    'Authorization': 'Basic ' + btoa(`${username}:${password}`),
};

let url = `https://baas.kinvey.com/appdata/${appKey}/students`;

let tBody = document.querySelector('tbody');

function loadData() {
    fetch(url, {
        headers
    })
        .then(handler)
        .then(data => {
            data.sort((a, b) =>  a.ID - b.ID);

            data.forEach(student => {
                let id = student.ID;
                let firstName = student.FirstName;
                let lastName = student.LastName;
                let facultyNumber = student.FacultyNumber;
                let grade = student.Grade;

                let newRow = createNewRow([id, firstName, lastName, facultyNumber, grade]);
                tBody.appendChild(newRow);
            });
        });
}

function createNewRow(arguments) {
    let tr = document.createElement('tr');

    arguments.forEach(el => {
        let th = document.createElement('th');
        th.textContent = el;
        tr.appendChild(th);
    });

    return tr;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Error: ${response.statusText}`)
    }

    return response.json();
}