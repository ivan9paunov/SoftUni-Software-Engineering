import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onEdit} to your form
// Load value to the form
// Adapt form values from your task in onEdit function

const editTemplate = (data) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value=${data.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value=${data.category}
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              >${data.description}</textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              >${data.requirements}</textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value=${data.salary}
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
    const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);

    if (!title || !imageUrl || !category || !description || !requirements || !salary) {
        throw new Error(alert('All fields must be filled!'));
    }

    const eventId = ctx.params.id;
    await dataService.editItem(eventId, { title, imageUrl, category, description, requirements, salary });
    event.target.reset();
    ctx.goTo(`/details/${eventId}`);
}