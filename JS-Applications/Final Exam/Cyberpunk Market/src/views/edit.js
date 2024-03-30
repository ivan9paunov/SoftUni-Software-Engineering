import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { userHelper } from '../utility/userHelper.js';

const editTemplate = (data) => html`
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit=${onEdit} class="edit-form">
        <input type="text" name="item" id="item" placeholder="Item" .value=${data.item} />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
          .value=${data.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value=${data.price}
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          .value=${data.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
          .value=${data.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        >${data.description}</textarea>
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
  const { item, imageUrl, price, availability, type, description } = Object.fromEntries(formData);

  if (!item || !description || !imageUrl || !price || !availability || !type) {
    userHelper.notification('All fields must be filled!');
    return;
  }

  const eventId = ctx.params.id;
  await dataService.editItem(eventId, { item, imageUrl, price, availability, type, description });
  event.target.reset();
  ctx.goTo(`/details/${eventId}`);
}