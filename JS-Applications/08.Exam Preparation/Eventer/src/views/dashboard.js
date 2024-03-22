import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

function eventsTemplate(items) {
    if (items.length > 0) {
        return html`
            <h2>Current Events</h2>
            <section id="dashboard">
            ${items.map(item => html`
                    <div class="event">
                        <img src=${item.imageUrl} alt="example1" />
                        <p class="title">${item.name}</p>
                        <p class="date">${item.date}</p>
                        <a class="details-btn" href="/details/${item._id}">Details</a>
                    </div>
                </section>
            `)};
        `;
    } else {
        return html`
            <h2>Current Events</h2>
            <section id="dashboard">
                <h4>No Events yet.</h4>
            </section>`;
    }
}

export async function showEventsView(ctx) {
    const data = await dataService.getAllEvents();
    ctx.render(eventsTemplate(data));
}