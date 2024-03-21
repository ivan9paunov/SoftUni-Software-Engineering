import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <div id="dashboard-holder">
                ${items.map(cardTemplate)}
            </div>
        `;
    } else {
        return html`
            <div id="dashboard-holder">
                <h1>No ideas yet! Be the first one :)</h1>
            </div>`;
    }
}


const cardTemplate = (item) => html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${item.title}</p>
        </div>
        <img class="card-image" src="${item.img}" alt="Card image cap">
        <a class="btn" href="/details/${item._id}">Details</a>
    </div>
`;

let context = null;
export async function showDashboardView(ctx) {
    context = ctx;
    const items = await dataService.getAllIdeas();
    ctx.render(dashboardTemplate(items));
    const navBtns = Array.from(document.querySelector('ul.navbar-nav').children);
    navBtns.forEach(div => {
        if (div.className.includes('active')) {
            div.classList.remove('active');
        }
    });
    navBtns[0].classList.add('active');
}