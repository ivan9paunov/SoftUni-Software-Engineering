import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                value=${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                value=${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                value=${data.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${data.description}</textarea>

              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                value=${data.price}
              />
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
    const { name, imageUrl, category, description, price } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !description || !price) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { name, imageUrl, category, description, price });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}