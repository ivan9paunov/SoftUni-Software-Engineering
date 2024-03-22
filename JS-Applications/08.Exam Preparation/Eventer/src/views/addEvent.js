import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const addTemplate = () => html`
    <section id="create">
        <div class="form">
            <h2>Add Event</h2>
            <form @submit=${onAdd} class="create-form">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Event"
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="event-image"
                    placeholder="Event Image URL"
                />
                <input
                    type="text"
                    name="category"
                    id="event-category"
                    placeholder="Category"
                />


                <textarea
                    id="event-description"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    cols="50"
                ></textarea>

                <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="When?"
                />

                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

let ctx = null;
export function showAddEventView(context) {
    ctx = context;
    ctx.render(addTemplate());
}

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !description || !date) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createEvent({ name, imageUrl, category, description, date });
    event.target.reset();
    ctx.goTo('/events');
}