import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
      <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${onEdit} class="edit-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
            value=${data.name}
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image URL"
            value=${data.imageUrl}
          />
          <textarea
            id="fruit-description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${data.description}</textarea>
          <textarea
            id="fruit-nutrition"
            name="nutrition"
            placeholder="Nutrition"
            rows="10"
            cols="50"
          >${data.nutrition}</textarea>
          <button type="submit">post</button>
        </form>
      </div>
    </section>
`;

let ctx = null;
export async function showEditView(context) {
    ctx = context;
    const eventId = ctx.params.id;
    const data = await dataService.getItemDetails(eventId);
    ctx.render(editTemplate(data));
}

async function onEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

    if (!name || !imageUrl || !description || !nutrition) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { name, imageUrl, description, nutrition });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}