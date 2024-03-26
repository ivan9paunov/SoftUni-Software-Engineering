import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <h2>Products</h2>
            <section id="dashboard">
                ${items.map(cardTemplate)};
            </section>
        `;
    } else {
        return html`
            <h2>Products</h2>
            <section id="dashboard">
                    <h2>No products yet.</h2>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <div class="product">
        <img src=${item.imageUrl} alt="example1" />
        <p class="title">${item.name}</p>
        <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
        <a class="details-btn" href="/details/${item._id}">Details</a>
    </div>
`;


export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
}