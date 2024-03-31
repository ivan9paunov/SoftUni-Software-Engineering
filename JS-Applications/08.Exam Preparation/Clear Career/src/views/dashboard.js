import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <section id="dashboard">
            <h2>Job Offers</h2>
                ${items.map(cardTemplate)};
            </section>
        `;
    } else {
        return html`
            <section id="dashboard">
                <h2>Job Offers</h2>
                <h2>No offers yet.</h2>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <div class="offer">
        <img src=${item.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>
`;


export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
}