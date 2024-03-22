import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

const editTemplate = (data) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Event</h2>
            <form @submit=${onEdit} class="edit-form">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Event"
                    .value = ${data.name}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="event-image"
                    placeholder="Event Image"
                    .value = ${data.imageUrl}
                />
                <input
                    type="text"
                    name="category"
                    id="event-category"
                    placeholder="Category"
                    .value = ${data.category}
                />
                <textarea
                    id="event-description"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    cols="50"
                    .value = ${data.description}
                ></textarea>
                <label for="date-and-time">Event Time:</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="When?"
                    .value = ${data.date}
                />
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

let ctx = null;
export async function showEditView(context) {
    ctx = context;
    const eventId = ctx.params.id;
    const data = await dataService.getEventDetails(eventId);
    ctx.render(editTemplate(data));
}

async function onEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !description || !date) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editEvent(eventId, { name, imageUrl, category, description, date });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}