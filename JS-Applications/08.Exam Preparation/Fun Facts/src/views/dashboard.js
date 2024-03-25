import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <h2>Fun Facts</h2>
            <section id="dashboard">
                ${items.map(cardTemplate)};
            </section>
        `;
    } else {
        return html`
            <h2>Fun Facts</h2>
            <section id="dashboard">
                    <h2>No Fun Facts yet.</h2>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <div class="fact">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="category">${item.category}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;


export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
}