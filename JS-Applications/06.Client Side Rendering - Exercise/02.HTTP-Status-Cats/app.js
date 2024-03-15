import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const catsSection = document.getElementById('allCats');

function catsTemplate(allCats) {
    return html`
        <ul>
            ${allCats.map(cat => {
                return html `
                    <li>
                        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                            <div class="info">
                                <button @click=${showInfo} class="showBtn">Show status code</button>
                                <div class="status" style="display: none" id=${cat.id}>
                                    <h4>Status Code: ${cat.statusCode}</h4>
                                    <p class="card-text">${cat.statusMessage}</p>
                                </div>
                            </div>
                    </li>
                `;
            })}
        </ul>
    `;
}

render(catsTemplate(cats), catsSection);

function showInfo(event) {
    const statusDiv = event.target.parentElement.querySelector('.status');
    const isHidden = statusDiv.style.display == 'none';
    statusDiv.style.display = isHidden ? 'block' : 'none';
    event.target.textContent = event.target.textContent == 'Show status code' ? 'Hide status code' : 'Show status code';
}