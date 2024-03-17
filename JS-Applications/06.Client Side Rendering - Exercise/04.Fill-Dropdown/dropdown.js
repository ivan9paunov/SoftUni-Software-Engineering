import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

loadItems();

const root = document.getElementById('menu');
document.querySelector('form').addEventListener('submit', onAdd);

async function loadItems() {
    const data = await requester();
    render(data.map(optionsTemplate), root);
}


async function onAdd(event) {
    event.preventDefault();

    const inputRef = event.target.parentElement.querySelector('input');
    const inputText = inputRef.value;
    await sendData(inputText);
    await loadItems();
    inputRef.value = '';
}

const optionsTemplate = (data) => html`
    <option value = ${data._id}>${data.text}</option>
`;

async function requester() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return Object.values(data);

    } catch (error) {
        alert(error.message);
    }
}

async function sendData(text) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {
        alert(error.message);
    }
}