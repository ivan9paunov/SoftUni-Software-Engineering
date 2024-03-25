import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              value=${data.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value=${data.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${data.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${data.moreInfo}</textarea>
              <button type="submit">Post</button>
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
    const { category, description } = Object.fromEntries(formData);
    const imageUrl = formData.get('image-url');
    const moreInfo = formData.get('additional-info');

    if (!category || !description || !imageUrl || !moreInfo) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { category, imageUrl, description, moreInfo });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}