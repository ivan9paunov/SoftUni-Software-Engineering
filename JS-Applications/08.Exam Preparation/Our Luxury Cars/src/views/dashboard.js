import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function dashboardTemplate(items) {
    if (items.length > 0) {
        return html`
            <h3 class="heading">Our Cars</h3>
            <section id="dashboard">
                ${items.map(cardTemplate)};
            </section>
        `;
    } else {
        return html`
            <h3 class="heading">Our Cars</h3>
            <section id="dashboard">
                <h3 class="nothing">Nothing to see yet</h3>
            </section>`;
    }
}

const cardTemplate = (item) => html`
    <div class="car">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.model}</h3>
        <div class="specs">
            <p class="price">Price: €${item.price}</p>
            <p class="weight">Weight: ${item.weight} kg</p>
            <p class="top-speed">Top Speed: ${item.speed} kph</p>
        </div>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;


export async function showDashboardView(ctx) {
    const data = await dataService.getAllItems();
    ctx.render(dashboardTemplate(data));
}