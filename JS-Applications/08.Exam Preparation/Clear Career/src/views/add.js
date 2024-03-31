import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';

// Add @submit=${onAdd} to your form

const addTemplate = () => html`
    <section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${onAdd} class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

let ctx = null;
export function showAddView(context) {
    ctx = context;
    ctx.render(addTemplate());
}

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //Update formData values to the ones from your task
    const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);

    if (!title || !imageUrl || !category || !description || !requirements || !salary) {
        throw new Error(alert('All fields must be filled!'));
    }

    await dataService.createItem({ title, imageUrl, category, description, requirements, salary });
    event.target.reset();
    ctx.goTo('/catalog');
}