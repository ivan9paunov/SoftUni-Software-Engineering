const tableBody = document.querySelector('table tbody');
const form = document.querySelector('form');

const url = 'http://localhost:3030/jsonstore/collections/students';

document.getElementById('submit').addEventListener('click', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData);
    
    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        });

        if (!request.ok) {
            const error = await request.json();
            throw new Error(error.message);
        }
        
    } catch (error) {
        alert(error.message);
    }

    displayData();

    form.reset();
}

async function displayData() {
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        
        const data = await response.json();
    
        tableBody.replaceChildren();
        Object.values(data).forEach(person => {
            const trElement = createTableRow(person.firstName, person.lastName, person.facultyNumber, person.grade);
            tableBody.appendChild(trElement);
        });
        
    } catch (error) {
        alert(error.message);
    }

}

function createTableRow(fName, lName, fNum, grade) {
    const trElement = document.createElement('tr');
    trElement.appendChild(createEl('td', fName));
    trElement.appendChild(createEl('td', lName));
    trElement.appendChild(createEl('td', fNum));
    trElement.appendChild(createEl('td', grade));

    return trElement;
}

function createEl(type, content) {
    const el = document.createElement(type);
    el.textContent = content;

    return el;
}

displayData();