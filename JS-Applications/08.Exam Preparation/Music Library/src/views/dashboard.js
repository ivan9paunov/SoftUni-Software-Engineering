import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <section id="dashboard">
                <h2>Albums</h2>
                <ul class="card-wrapper">
                    ${items.map(cardTemplate)};
                </ul>
            </section>
        `;
    } else {
        return html`
            <section id="dashboard">
                <h2>Albums</h2>
                <ul class="card-wrapper">
                    <h2>There are no albums added yet.</h2>
                </ul>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <li class="card">
        <img src=${item.imageUrl} alt="Album Image" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${item.singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${item.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${item.sales}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </li>
`;

export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
}