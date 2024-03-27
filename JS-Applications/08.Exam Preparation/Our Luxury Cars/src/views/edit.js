import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
      <div class="form form-auto">
        <h2>Edit Your Car</h2>
        <form @submit=${onEdit} class="edit-form">
          <input type="text" name="model" id="model" placeholder="Model" value=${data.model} />
          <input
            type="text"
            name="imageUrl"
            id="car-image"
            placeholder="Your Car Image URL"
            value=${data.imageUrl}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
            value=${data.price}
          />
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Weight in Kg"
            value=${data.weight}
          />
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Top Speed in Kmh"
            value=${data.speed}
          />
          <textarea
            id="about"
            name="about"
            placeholder="More About The Car"
            rows="10"
            cols="50"
          >${data.about}</textarea>
          <button type="submit">Edit</button>
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
    const { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { model, imageUrl, price, weight, speed, about });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}