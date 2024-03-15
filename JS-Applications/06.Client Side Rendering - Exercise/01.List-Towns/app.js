import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', onClick);

function ulTemplate(towns) {
    return html`
        <ul>
            ${towns.map(town => html`<li>${town}</li>`)}
        </ul>
    `;
} 

function onClick(event) {
    event.preventDefault();
    const towns = document.querySelector('input').value.split(', ');
    render(ulTemplate(towns), root);
}