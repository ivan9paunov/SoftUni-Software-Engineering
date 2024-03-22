import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function motorcyclesTemplate(items) {
    if (items.length > 0) {
        return html`
            <h2>Available Motorcycles</h2>
            <section id="dashboard">
                <!-- Display a div with information about every post (if any)-->
                ${items.map(cardTemplate)}
            </section>
        `;
    } else {
        return html`
            <h2>Available Motorcycles</h2>
            <section id="dashboard">
                <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
            </section>
        `;
    }
}

const cardTemplate = (item) => html`
    <div class="motorcycle">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.model}</h3>
        <p class="year">Year: ${item.year}</p>
        <p class="mileage">Mileage: ${item.mileage} km.</p>
        <p class="contact">Contact Number: ${item.contact}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;

export async function showMotorcyclesView(ctx) {
    const data = await dataService.getAllMotorcycles();
    ctx.render(motorcyclesTemplate(data));
}